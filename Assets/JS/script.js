// variables
var startButton = document.getElementById('start-btn')
var button = document.getElementsByClassName('ans-btn')
var countdownEl = document.getElementById("countdown")
var d = true;
var timer;
var questionsContainerEl = document.getElementById('question-container')
var questions = [
    {
        question: "what is love?",
        a: "what?",
        b: "answer",        
        c: "don't hurt me",
        d: "answer",
        correct: "c"
    },{
        question: "what is CSS?",
        a: "why?",
        b: "answer",        
        c: "don't hurt me",
        d: "answer",
        correct: "d"
    },{
        question: "what is love?",
        a: "what?",
        b: "answer",        
        c: "don't hurt me",
        d: "answer",
        correct: "c"
    }
]

// functions
function gameOver(params) {
    clearInterval(timer)
    questionsContainerEl.classList.add('hide')
}

function renderQuestion(params) {
    
}

function answerCheck(params) {
    
}

// timer --
function startTimer() {
    
    var time = 12;
    timer = setInterval(() => {
        time--;
        var minutes = Math.floor(time / 60);
        var seconds = time % 60;

        var clock;
        if (seconds < 10) {
            clock = `${minutes}:0${seconds}`;
        } else {
            clock = `${minutes}:${seconds}`;
        }
        countdownEl.innerHTML = clock;
        
        // include finish array
        if (time <=0) {
            gameOver();
        }
        console.log({time})
    }, 1000);
}


function startGame() {
    startButton.classList.add('hide')
    questionsContainerEl.classList.remove('hide')
    startTimer()
    button[0].addEventListener("click", gameOver)
    button[1].addEventListener("click", gameOver)
    button[2].addEventListener("click", gameOver)
    button[3].addEventListener("click", gameOver)
}



// local storage

// Click events
startButton.addEventListener("click", startGame)
