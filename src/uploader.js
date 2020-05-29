const { Storage } = require('@google-cloud/storage');
const storage = new Storage();

function uploadFile(filename, userName) {
    if (!userName) {
        userName = "unknown";
    }
    // const currentDate = new Date().toISOString().slice(0, 10)
    return storage.bucket(process.env.BUCKET_NAME).upload(filename, { destination: `raw/landing/hindi/audio/users/${userName}/${filename}` });
}
module.exports = {
    uploadFile
}