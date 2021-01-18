let questions = [
    {
        title: "question 1: click response a",
        options: ["choose a", "choose b", "choose c", "choose d"],
        answer: "choose a"
    },
    {
        title: "question 2: click response b",
        options: ["choose a", "choose b", "choose c", "choose d"],
        answer: "choose b"
    },
    {
        title: "question 3: click response c",
        options: ["choose a", "choose b", "choose c", "choose d"],
        answer: "choose c"
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
const questionFeedback = document.querySelector("#question-feedback");
const finalScore = document.querySelector("#final-score");
const initialsEl = document.querySelector("#initials");

function startQuiz() {
    startEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");

    //start timer
    timerEl.textContent = time;
    timerId = setInterval(timerCountdown, 1000);

    startQuestions();
}

function startQuestions() {
    
    //use questionTitle and responseOptions rather than questionsEl?
    responseOptions.innerHTML = "";

    let currentQuestion = questions[questionIndex]

    questionTitle.textContent = currentQuestion.title;
    
    currentQuestion.options.forEach(function(option) {
        let optionButton = document.createElement("button");
        optionButton.setAttribute("class", "option");
        optionButton.setAttribute("value", option);

        optionButton.textContent = option;

        optionButton.onclick = answerQuestion;

        responseOptions.appendChild(optionButton);
    });

    if (time <= 0) {
        time = 0;
        endQuiz();
    }
}

function answerQuestion() {
    //connects to startQuestions => optionButton.setAttribute("value", option);
    if (this.value !== questions[questionIndex].answer) {
        console.log(this.value);
        console.log("wrong");
        time = time - 10;
        //fix timing
        questionFeedback.setAttribute("class", "wrong");
        questionFeedback.textContent = "Wrong!";
    }
    else {
        console.log(this.value);
        console.log("correct");
        //fix timing
        questionFeedback.setAttribute("class", "correct");
        questionFeedback.textContent = "Correct!";
    }

    //questionFeedback.removeAttribute("class");
    setTimeout(function () {
        questionFeedback.setAttribute("class", "hide");
    }, 500);

    questionIndex++
    console.log(questionIndex);

    if (questionIndex == questions.length) {
        setTimeout(endQuiz, 500);
    }
    else {
        startQuestions();
    }
}

function endQuiz() {
    clearInterval(timerId);
    questionsEl.setAttribute("class", "hide");
    timerEl.setAttribute("class", "hide");
    finishEl.removeAttribute("class");
    console.log(time);

    if (time <= 0) {
        time = 0;
    }

    finalScore.textContent = "Your score is " + time;
    return;
}

function timerCountdown() {
    timerEl.textContent = time;
    
    if (time > 0) {
        time--;
    }
    else if(time <= 0) {
        endQuiz();
    }
}

function saveScore() {
    let initials = initialsEl.value.trim();

    if (initials == "") {
        alert("Please enter your initials");
    }
    else {
        //https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
        let highScores = JSON.parse(window.localStorage.getItem("scores")) || [];

        let newScore = {
            score: time,
            initials: initials
        }

        highScores.push(newScore);
        window.localStorage.setItem("scores", JSON.stringify(highScores));

        window.location.href = "scores.html"
    }
}

document.querySelector("#start-btn").addEventListener("click", startQuiz);
document.querySelector("#finish-btn").addEventListener("click", saveScore);