let questions = [
    {
        title: "testing: click response a",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        title: "testing: click response b",
        choices: ["a", "b", "c", "d"],
        answer: "b"
    },
    {
        title: "testing: click response c",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    }
];

let time = 40
let timerId;
let questionIndex = 0;

const startEl = document.querySelector("#start");
const questionsEl = document.querySelector("#questions");
const finishEl = document.querySelector("#finish");
const timerEl = document.querySelector("#timer");
const questionTitle = document.querySelector("#question-title");
const responseOptions = document.querySelector("#response-options");

function startQuiz() {
    startEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");

    //start timer
    timerEl.textContent = time;
    timerId = setInterval(timerCountdown, 1000);

    startQuestions();
}

function startQuestions() {
    //questionsEl.textContent = "";
    let currentQuestion = questions[questionIndex]

    questionTitle.textContent = currentQuestion.title;
    responseOptions.textContent = currentQuestion.choices;

    
}

function checkQuestion() {

}

function endQuiz() {
    questionsEl.setAttribute("class", "hide");
    finishEl.removeAttribute("class");
}

function timerCountdown() {
    time--;
    timerEl.textContent = time;

    if(time <= 0) {
        endQuiz();
    }
}

document.querySelector("#start-btn").addEventListener("click", startQuiz);