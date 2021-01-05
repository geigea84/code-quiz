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
        title: "testing: click response a",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    }
];

let time = 40
const startEl = document.querySelector("#start");
const mainEl = document.querySelector("#main");
const timerEl = document.querySelector("#timer");


function startQuiz() {
    startEl.setAttribute("class", "hide");
    mainEl.removeAttribute("class", "hide");
    timerEl.innerHTML(time);
    
}

document.querySelector("#start-quiz").addEventListener("click", startQuiz);