// variables
var startButton = document.getElementById('start-btn')
var questionsContainerEl = document.getElementById('question-container')

// functions
function startGame() {
    startButton.classList.add('hide')
    questionsContainerEl.classList.remove('hide')
}

function gameOver(params) {
    
}
// timer
function timer(params) {
    setInterval
}
// local storage

// Click events
startButton.addEventListener("click", startGame)