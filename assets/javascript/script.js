let questions = [
    {
        title: "Which is the best football team?",
        options: ["Green Bay Packers", "Chicago Bears", "Minnesota Vikings", "Detroit Lions"],
        answer: "Green Bay Packers"
    },
    {
        title: "Which is the best baseball team?",
        options: ["Milwaukee Brewers", "Chicago Cubs", "St. Louis Cardinals", "Pittsburgh Pirates"],
        answer: "Milwaukee Brewers"
    },
    {
        title: "Which is the best basketball team?",
        options: ["Milwaukee Bucks", "Chicago Bulls", "Detroit Pistons", "It's basketball, who cares?"],
        answer: "It's basketball, who cares?"
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
    //hide startEl and display questionsEl
    startEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");

    //start timer
    timerEl.textContent = time;
    timerId = setInterval(timerCountdown, 1000);

    //call startQuestions function
    startQuestions();
}

function startQuestions() {
    //clears innerHTML from response options
    responseOptions.innerHTML = "";

    //sets current question based on their array index
    let currentQuestion = questions[questionIndex]

    //displays current question title
    questionTitle.textContent = currentQuestion.title;

    //create button for current question response options
    //append each button to the page
    currentQuestion.options.forEach(function (option) {
        let optionButton = document.createElement("button");
        optionButton.setAttribute("class", "option");
        optionButton.setAttribute("value", option);

        optionButton.textContent = option;

        optionButton.onclick = answerQuestion;

        responseOptions.appendChild(optionButton);
    });

    //if time is equal to or less than 0,
    //set time to 0 and end quiz
    if (time <= 0) {
        time = 0;
        endQuiz();
    }
}

function answerQuestion() {
    //click wrong response: display feedback Wrong and subtract time from timer
    //click correct response: display feedback Correct
    if (this.value !== questions[questionIndex].answer) {
        time = time - 10;
        questionFeedback.setAttribute("class", "wrong");
        questionFeedback.textContent = "Wrong!";
    }
    else {
        questionFeedback.setAttribute("class", "correct");
        questionFeedback.textContent = "Correct!";
    }

    //set 500ms display time for feedback div
    setTimeout(function () {
        questionFeedback.setAttribute("class", "hide");
    }, 500);

    //iterate through questions
    questionIndex++

    //no more questions: end quiz
    //more questions: call next question
    if (questionIndex == questions.length) {
        setTimeout(endQuiz, 500);
    }
    else {
        startQuestions();
    }
}

function endQuiz() {
    //stop timer
    clearInterval(timerId);
    //hide questions and timer, display finishEl
    questionsEl.setAttribute("class", "hide");
    timerEl.setAttribute("class", "hide");
    finishEl.removeAttribute("class");

    //if time is less than or equal to 0, set time to 0
    if (time <= 0) {
        time = 0;
    }

    //score is time when timerId is stopped
    finalScore.textContent = "Your score is " + time;
    return;
}

function timerCountdown() {
    timerEl.textContent = time;

    //if timer is greater than 0 decrement time
    //if timer is less than or equal to 0 call endQuiz
    if (time > 0) {
        time--;
    }
    else if (time <= 0) {
        endQuiz();
    }
}

function saveScore() {
    //remove whitespace from string
    let initials = initialsEl.value.trim();

    //blank initials throw alert
    //initials present then set to local storage and get all high scores
    if (initials == "") {
        alert("Please enter your initials");
    }
    else {
        //https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
        //get previous high scores from local storage (or blank array if none)
        let highScores = JSON.parse(window.localStorage.getItem("scores")) || [];

        let newScore = {
            score: time,
            initials: initials
        }

        //add new high score to local storage array
        highScores.push(newScore);
        window.localStorage.setItem("scores", JSON.stringify(highScores));

        //bring up scores.html page
        window.location.href = "scores.html"
    }
}

document.querySelector("#start-btn").addEventListener("click", startQuiz);
document.querySelector("#finish-btn").addEventListener("click", saveScore);