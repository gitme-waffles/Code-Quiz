// variables
var startButton = document.getElementById('start-btn')
var ansButton = document.getElementsByClassName('ans-btn')
var countdownEl = document.getElementById("countdown")
var question = document.getElementById("question")
var ansA = document.getElementById("ans-a")
var ansB = document.getElementById("ans-b")
var ansC = document.getElementById("ans-c")
var ansD = document.getElementById("ans-d")
var timer;
var score;
var questionsContainerEl = document.getElementById('question-container')
var questionIndex = 0;
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

function renderQuestion(index) {
    question.innerHTML = questions[index].question
    ansA.innerHTML = questions[index].a
    ansB.innerHTML = questions[index].b
    ansC.innerHTML = questions[index].c
    ansD.innerHTML = questions[index].d
}

function answerCheck(index) {

    questionIndex++;
    renderQuestion(questionIndex)
    console.log("lol")
}

function questionCycle(params) {
    for (let i = 0; i < questions.length; i++);

    // renderQuestion(0)
}

    
// timer --
function startTimer() {
    
    var time = 60;
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
        if (time <=0 ) {
            gameOver();
        }
        console.log({time})
    }, 1000);
}


function startGame() {
    startButton.classList.add('hide')
    questionsContainerEl.classList.remove('hide')
    startTimer()
    renderQuestion(questionIndex)
    // button[0].addEventListener("click", gameOver)
    // button[1].addEventListener("click", gameOver)
    // button[2].addEventListener("click", gameOver)
    // button[3].addEventListener("click", gameOver)
}



// local storage

// Click events
startButton.addEventListener("click", startGame)
ansButton[0].addEventListener("click", answerCheck)
ansButton[1].addEventListener("click", answerCheck)
ansButton[2].addEventListener("click", answerCheck)
ansButton[3].addEventListener("click", answerCheck)