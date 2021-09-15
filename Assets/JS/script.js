// variables
var startButton = document.getElementById('start-btn')
var ansButton = document.getElementsByClassName('ans-btn')
var countdownEl = document.getElementById("countdown")
var question = document.getElementById("question")
var ansA = document.getElementById("ans-a")
var ansB = document.getElementById("ans-b")
var ansC = document.getElementById("ans-c")
var ansD = document.getElementById("ans-d")
var time = 60;
var timer;
var score = 0;
var questionsContainerEl = document.getElementById('question-container')
var gameOverEl = document.getElementById('game-over')
var yourScoreEl = document.getElementById("your-score")
var userInitialsEl = document.getElementById('user-initials')
var submitEl = document.getElementById('submit')
var highScoresEl = document.getElementById('highscores')
var clearBtn = document.getElementById('clear-btn')
var returnBtn = document.getElementById('return-btn')
var scoreList = document.getElementById('score-list')
var questionIndex = 0;
var questions = [
    {
        question: "what is love?",
        a: "what?",
        b: "answer",        
        c: "don't hurt me",
        d: "answer",
        correct: "ans-c"
    },{
        question: "what is CSS?",
        a: "why?",
        b: "lol not an answer",        
        c: "don't hurt me",
        d: "answer",
        correct: "ans-c"
    },{
        question: "what is love?",
        a: "what?",
        b: "answer",        
        c: "don't hurt me",
        d: "answer",
        correct: "ans-c"
    },{
        question: "what is love?",
        a: "what?",
        b: "answer",        
        c: "don't hurt me",
        d: "answer",
        correct: "ans-c"
    },{
        question: "what is CSS?",
        a: "why?",
        b: "answer",        
        c: "don't hurt me",
        d: "answer",
        correct: "ans-c"
    },{
        question: "what is love?",
        a: "what?",
        b: "answer",        
        c: "don't hurt me",
        d: "answer",
        correct: "ans-c"
    }
]

// functions
function clearScore(params) {
    localStorage.clear()

    renderScores()
}

function renderScores(params) {
    scoreList.innerHTML = ''
    if (localStorage.length <= 0) {
        listedScoreEl.innerHTML == '';
    }
    var listedScore = localStorage.getItem(userInitialsEl.value)
    var listedScoreEl = document.createElement("p")
    listedScoreEl.innerHTML =  `${userInitialsEl.value} ${listedScore}`

    highScoresEl.children[2].appendChild(listedScoreEl)

}

function submitScores(params) {
    localStorage.setItem(userInitialsEl.value, score)
    gameOverEl.classList.add('hide')
    highScoresEl.classList.remove('hide')    
    renderScores()
    userInitialsEl.value = '';
}

function gameOver(params) {
    clearInterval(timer)
    questionsContainerEl.classList.add('hide')
    gameOverEl.classList.remove('hide')
    yourScoreEl.innerHTML = `Your score is ${score}!`;
    
}

function renderQuestion(index) {
    question.innerHTML = questions[index].question
    ansA.innerHTML = questions[index].a
    ansB.innerHTML = questions[index].b
    ansC.innerHTML = questions[index].c
    ansD.innerHTML = questions[index].d
}

function answerCheck(event) {
    if (event.target.id == questions[questionIndex].correct) {
        score++
    } else { time -= 10;
    }
    questionIndex++;
    if (questionIndex < questions.length) {
        renderQuestion(questionIndex)
    }else {
        gameOver()
    }
    console.log({time})
}

function questionCycle(params) {
    for (let i = 0; i < questions.length; i++);
    
    // renderQuestion(0)
}

    
// timer --
function startTimer() {
    time = 60;
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

function restart(params) {
    questionIndex = 0;
    highScoresEl.classList.add('hide')
    startButton.classList.remove('hide')
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
submitEl.addEventListener('click', submitScores)
clearBtn.addEventListener('click', clearScore)
returnBtn.addEventListener('click', restart)