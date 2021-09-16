//*** Variables ***

// Buttons
var startButton = document.getElementById('start-btn')
var ansButton = document.getElementsByClassName('ans-btn')
var clearBtn = document.getElementById('clear-btn')
var returnBtn = document.getElementById('return-btn')
var submitBtn = document.getElementById('submit')

// Cards
var questionsContainerEl = document.getElementById('question-container')
var gameOverEl = document.getElementById('game-over')
var highScoresEl = document.getElementById('highscores')

// Display
var yourScoreEl = document.getElementById("your-score")
var scoreList = document.getElementById('score-list')

// Local Storage
var userInitialsEl = document.getElementById('user-initials')
var scoreEntries = 'list';
var scoreArray = [];

// Questions
var questionIndex = 0;
var questions = [
    {
        question: "What does HTML stand for?",
        a: "Hyper Training Marking Language",
        b: "Hyper Text Marketing Language",        
        c: "Hyper Text Markup Language",
        d: "Hyper Text Markup Leveler",
        correct: "ans-c"
    },
    {
        question: "What is CSS?",
        a: "Colored Style Script",
        b: "Consolidated Style Sheet",        
        c: "Cascading Style Script",
        d: "Cascading Style Sheets",
        correct: "ans-d"
    },
    {
        question: "When was the initial release of HTML?",
        a: "1976",
        b: "1984",        
        c: "1993",
        d: "1999",
        correct: "ans-c"
    },
    {
        question: "Which of the following is a funcion?",
        a: "function fun[]",
        b: "fun function()",        
        c: "function function{}",
        d: "function funcion()",
        correct: "ans-d"
    },
    {
        question: "What does the acronym WWW stand for?",
        a: "Wide Web World",
        b: "Wide World Web",
        c: "World Wide Web",
        d: "Web Wide World",
        correct: "ans-c"
    },
    {
        question: "Which HTML element do we put Javascript in?",
        a: `<script src="xxx.js">`,
        b: `<link src="xxx.js">`,
        c: `<script href="xxx.js">`,
        d: `<link href="xxx.js">`,
        correct: "ans-a"
    }
]
// Question Display
var question = document.getElementById("question")
var ansA = document.getElementById("ans-a")
var ansB = document.getElementById("ans-b")
var ansC = document.getElementById("ans-c")
var ansD = document.getElementById("ans-d")

// Score
var score = 0;
// Timer
var time = 60;
var timer;
var countdownEl = document.getElementById("countdown")

// functions
// render length of array with for loop append
// render to HTML El 
function renderScores(storedScoreArray) {
    scoreList.innerHTML = ''
    for (i = 0; i < storedScoreArray.length; i++) {
        var storedObj = storedScoreArray[i];

        var li = document.createElement('li');
        // li.setAttribute('data-index', i);

        li.innerHTML =  `${storedObj.initials} ${storedObj.score}`;
        scoreList.appendChild(li);
    }
    // var returnedArray = JSON.parse(localStorage.getItem(scoreEntries))




    
    // if (localStorage.length <= 0) {
    //     listedScoreEl.innerHTML == '';
    // } else {
    //     for (i =0; i < localStorage.length; i++) {
    //         console.log(localStorage[i])
    //         var listedScore = localStorage.getItem(userInitialsEl.value)
    //         var listedScoreEl = document.createElement("p")
    //         listedScoreEl.innerHTML =  `${userInitialsEl.value} ${listedScore}`
    
    //         highScoresEl.children[2].appendChild(listedScoreEl)
    //     }
    // }
    // var listedScore = localStorage.getItem(userInitialsEl.value)
    // var listedScoreEl = document.createElement("p")
    // listedScoreEl.innerHTML =  `${userInitialsEl.value} ${listedScore}`
    
    // highScoresEl.children[2].appendChild(listedScoreEl)
}

function clearScore() {
    localStorage.removeItem(scoreEntries)
    // change line above to remove the item
    scoreList.remove;
    renderScores(scoreArray)
}

// input => userInitialsEl
// render highscores in scoreList
// initials and score in an object *
// add objects in array
// array = value
function submitScores() {
    // userInitialEl + score => object => array => adds to existing local storage
    var scoreObject = {
        initials: userInitialsEl.value,
        score: score
    }

    var storedScoreArray = JSON.parse(localStorage.getItem(scoreEntries))

    if (storedScoreArray == null) {
        storedScoreArray = scoreArray;
    }

    console.log({storedScoreArray})
    storedScoreArray.push(scoreObject)
    localStorage.setItem(scoreEntries, JSON.stringify(storedScoreArray))

    gameOverEl.classList.add('hide')
    highScoresEl.classList.remove('hide')    
    renderScores(storedScoreArray)
    userInitialsEl.value = '';
}

function gameOver() {
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
    } else {
        time -= 10;
    }
    questionIndex++;
    if (questionIndex < questions.length) {
        renderQuestion(questionIndex)
    } else {
        gameOver()
    }
}

function questionCycle(params) {
    for (let i = 0; i < questions.length; i++);    
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
        
        if (time <=0 ) {
            gameOver();
        }
    }, 1000);
}

function restart() {
    questionIndex = 0;
    highScoresEl.classList.add('hide')
    startButton.classList.remove('hide')
}

function startGame() {
    startButton.classList.add('hide')
    questionsContainerEl.classList.remove('hide')
    startTimer()
    renderQuestion(questionIndex)
}

// Event Listeners -> Click events
startButton.addEventListener("click", startGame)
ansButton[0].addEventListener("click", answerCheck)
ansButton[1].addEventListener("click", answerCheck)
ansButton[2].addEventListener("click", answerCheck)
ansButton[3].addEventListener("click", answerCheck)
submitBtn.addEventListener('click', submitScores)
clearBtn.addEventListener('click', clearScore)
returnBtn.addEventListener('click', restart)
