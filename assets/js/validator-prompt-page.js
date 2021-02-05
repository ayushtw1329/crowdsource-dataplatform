const {showInstructions} = require('./validator-instructions')
const {visualize} = require('./visualizer')

function convertPXToVH(px) {
    return px * (100 / document.documentElement.clientHeight);
}

function setPageContentHeight() {
    const $footer = $('footer');
    const $nav = $('.navbar');
    const edgeHeightInPixel = $footer.outerHeight() + $nav.outerHeight()
    const contentHeightInVH = 100 - convertPXToVH(edgeHeightInPixel)
    $('#content-wrapper').css('min-height', contentHeightInVH + 'vh');
}

const decideToShowPopUp = () => {
    const currentValidator = localStorage.getItem('currentValidator');
    const validatorDetails = localStorage.getItem('validatorDetails');

    const $footer = $('footer');
    if (!validatorDetails) {
        localStorage.setItem('validatorDetails', JSON.stringify({[currentValidator]: currentValidator}));
        $("#validator-page-content").addClass('d-none');
        $footer.removeClass('bottom').addClass('fixed-bottom')
        showInstructions();
        return;
    }
    const parsedDetails = JSON.parse(validatorDetails);
    if (!(parsedDetails.hasOwnProperty(currentValidator))) {
        localStorage.setItem('validatorDetails', JSON.stringify(Object.assign(parsedDetails, {[currentValidator]: currentValidator})));
        $("#validator-page-content").addClass('d-none');
        $footer.removeClass('bottom').addClass('fixed-bottom')
        showInstructions();
    }
}

const setAudioPlayer = function () {
    const myAudio = document.getElementById('my-audio');
    const play = $('#play');
    const pause = $('#pause');
    const replay = $('#replay');

    myAudio.addEventListener("ended", () => {
        enableValidation();
        pause.addClass('d-none');
        replay.removeClass('d-none');
    });

    play.on('click', () => {
        $('canvas').removeClass('d-none')
        $('#default_line').addClass('d-none')
        playAudio();
        setUpVisualizer();
    });

    pause.on('click', pauseAudio);

    replay.on('click', () => {
        replayAudio();
        setUpVisualizer();
    });

    function playAudio() {
        myAudio.load();
        play.addClass('d-none');
        pause.removeClass('d-none');
        myAudio.play();
    }

    function pauseAudio() {
        pause.addClass('d-none');
        replay.removeClass('d-none');
        enableValidation();
        myAudio.pause();
    }

    function replayAudio() {
        myAudio.load();
        replay.addClass('d-none');
        pause.removeClass('d-none');
        myAudio.play();
    }

    function enableButton(element) {
        element.children().removeAttr("opacity")
        element.removeAttr("disabled")
    }

    function enableValidation() {
        const likeButton = $("#like_button");
        const dislikeButton = $("#dislike_button");
        const skipButton = $("#skip_button");
        enableButton(likeButton)
        enableButton(dislikeButton)
        enableButton(skipButton)
    }
}

const sampleSentences = ['लटक कर पैरों को मुक्त करने की एक नई कसरत बालकों के हाथ लग गई', 'जल्द ही पोलैंड में कोर्चार्क के रेडियो प्रोग्राम बहुत', 'उसने कहा क्योंकि उसमें दिल नहीं होगा जो सारे शरीर में खून भेजता'];
let currentIndex = 0;
let progressCount = 0;

const animateCSS = ($element, animationName, callback) => {
    $element.addClass(`animated ${animationName}`);

    function handleAnimationEnd() {
        $element.removeClass(`animated ${animationName}`);
        $element.off('animationend');
        if (typeof callback === 'function') callback();
    }

    $element.on('animationend', handleAnimationEnd);
};

function setSentenceLabel(index) {
    const $sentenceLabel = $('#sentenceLabel')
    $sentenceLabel[0].innerText = sampleSentences[index];
    animateCSS($sentenceLabel, 'lightSpeedIn');
}

function getNextSentence() {
    if (currentIndex < sampleSentences.length - 1) {
        currentIndex++;
        resetDecisionRow();
        setSentenceLabel(currentIndex);
    }
}

const updateDecisionButton = (button, colors) => {
    const children = button.children().children();
    children[0].setAttribute("fill", colors[0]);
    children[1].setAttribute("fill", colors[1]);
    children[2].setAttribute("fill", colors[2]);
}

const updateProgressBar = () => {
    progressCount++;
    document.getElementById(`rect_${progressCount}`).setAttribute("fill", "#007BFF");
}

const setValidatorNameInHeader = () => {
    const $navUser = $('#nav-user');
    const $navUserName = $navUser.find('#nav-username');
    $navUser.removeClass('d-none');
    const currentValidator = localStorage.getItem('currentValidator');
    $navUserName.text(currentValidator);
};

function disableButton(button) {
    button.children().attr("opacity", "50%");
    button.attr("disabled", "disabled");
}

function resetDecisionRow() {
    const dislikeButton = $("#dislike_button");
    const likeButton = $("#like_button");
    const skipButton = $("#skip_button");

    updateDecisionButton(dislikeButton, ["white", "#007BFF", "#343A40"]);
    updateDecisionButton(likeButton, ["white", "#007BFF", "#343A40"]);

    disableButton(likeButton)
    disableButton(dislikeButton)
    disableButton(skipButton)

    $("#replay").addClass('d-none');
    $("#play").removeClass('d-none');
    $('canvas').addClass('d-none')
    $('#default_line').removeClass('d-none')
}

let context, src;

function setUpVisualizer() {
    const canvas = document.getElementById('myCanvas');
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audio = document.querySelector('audio');

    context = context || new AudioContext();
    src = src || context.createMediaElementSource(audio);
    const analyser = context.createAnalyser();
    src.connect(analyser);
    analyser.connect(context.destination);
    visualize(canvas, analyser);
}

function addListeners() {
    const $footer = $('footer');
    $("#instructions-link").on('click', () => {
        $("#validator-page-content").addClass('d-none');
        $footer.removeClass('bottom').addClass('fixed-bottom')
        showInstructions();
    });

    const $validatorInstructionsModal = $('#validator-instructions-modal');

    $validatorInstructionsModal.on('hidden.bs.modal', function () {
        $("#validator-page-content").removeClass('d-none');
        $footer.removeClass('fixed-bottom').addClass('bottom')
    });

    const likeButton = $("#like_button");
    const dislikeButton = $("#dislike_button");

    likeButton.hover(function () {
            updateDecisionButton(likeButton, ["#007BFF", "white", "white"]);
        },
        function () {
            updateDecisionButton(likeButton, ["white", "#007BFF", "#343A40"]);
        }
    );

    dislikeButton.hover(function () {
            updateDecisionButton(dislikeButton, ["#007BFF", "white", "white"]);
        },
        function () {
            updateDecisionButton(dislikeButton, ["white", "#007BFF", "#343A40"]);
        }
    );

    dislikeButton.on('click', () => {
        updateProgressBar();
        getNextSentence();
    })

    likeButton.on('click', () => {
        updateProgressBar();
        getNextSentence();
    })

    $('#skip_button').on('click', () => {
        updateProgressBar();
        getNextSentence();
    })
}

$(document).ready(() => {
    const $footer = $('footer')
    $footer.addClass('bottom').removeClass('fixed-bottom')
    setPageContentHeight();
    addListeners();
    setValidatorNameInHeader();
    decideToShowPopUp();
    setAudioPlayer();
    setSentenceLabel(currentIndex)
});

module.exports = {
    decideToShowPopUp,
    setSentenceLabel,
    setAudioPlayer,
    setValidatorNameInHeader,
    addListeners,
    setUpVisualizer
};
