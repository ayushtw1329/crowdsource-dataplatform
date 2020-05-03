require('dotenv').config();
const { uploadFile } = require("./uploader");
const helmet = require('helmet')
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const router = express.Router();
const pgp = require('pg-promise')();
const {updateAndFetch} = require('./dbQuerys')
const envVars = process.env;
const db = pgp(`postgres://${envVars.DB_USER}:${envVars.DB_PASS}@${envVars.DB_HOST}/${envVars.DB_NAME}`);
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');
const compression = require('compression')

const multer = require('multer')
const multerStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString() + ".wav")
    }
})
const upload = multer({ storage: multerStorage })

app.use(helmet())
app.disable('x-powered-by');
app.use(compression())
app.use(cookieParser());
app.use(express.static('public'));
app.use(function (req, res, next) {
    var cookie = req.cookies.userId;
    if (cookie === undefined) {
        res.cookie('userId', uuidv4(), { maxAge: 60 * 60 * 24 * 365, httpOnly: true, secure: true, });
    }
    next();
});
app.use(express.static('public'))
app.set('view engine', 'ejs');



router.get('/', function (req, res) {
    res.render('home.ejs');
});
router.get('/about-us', function (req, res) {
    res.render('about-us.ejs');
});
router.get('/contact-us', function (req, res) {
    res.render('contact-us.ejs');
});
router.get('/terms-and-conditions', function (req, res) {
    res.render('terms-and-conditions.ejs');
});
router.get('/privacy-policy', function (req, res) {
    res.render('privacy-policy.ejs');
});


router.get('/record', function (req, res) {
    db.many( updateAndFetch)
        .then(data => {
            res.render('record.ejs', { sentences: data });
        })
        .catch(err => {
            res.sendStatus(500);
        })
});


router.post("/upload", upload.any(), (req, res) => {
    const file = req.files[0];
    console.log(file);
    console.log(req.body);
    uploadFile(file.path)
    .then(data => {
        res.sendStatus(200);
    })
    .catch((err) => {
        console.error(err);
        res.sendStatus(500);
    });
    res.status(200).send({ success: true })
})


app.use('/', router);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))