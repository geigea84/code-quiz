//circle back to fill in with questions
var questions = [
    {
        title:"testing: click response a", 
        choices:["a", "b", "c", "d"],
        answer:"a"
    },
    {
        title:"testing: click response b",
        choices:["a", "b", "c", "d"],
        answer:"b"
    },
    {
        title:"testing: click response c",
        choices:["a", "b", "c", "d"],
        answer:"c"
    }
];
var questionTitle = document.querySelector(".question-title");
var questionsList = document.querySelector("#questions-list");
var titlePage = document.querySelector(".title-page");
var startButton = document.querySelector("#start-quiz");

//function to start quiz and timer
var startQuiz = function(event) {
    var targetEl = event.target;
    console.log("startQuiz works");

    //adding array to html as list items
    var listItemEl = document.createElement("li");
    listItemEl.className = "question-item";
    console.log(listItemEl);

    //adding div to li to hold question info
    var questionInfoEl = document.createElement("div");
    questionInfoEl.className = "question-info";

    //add li to ul----------------------------------------needs verification
    //how to add var questions array to questionsList--------------------???
    listItemEl.appendChild(questionInfoEl);
    questionsList.appendChild(listItemEl);
    
    //use list item div as html element
    if (targetEl.matches("start-quiz")) {
        document.getElementById("question-info").innerHTML = questions[0];
    };

    clickAnswerButton();
};

//function to select answers in quiz
var clickAnswerButton = function() {
    console.log("clickAnswerButton works");
};

titlePage.addEventListener("click", startQuiz);
