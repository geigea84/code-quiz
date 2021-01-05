//circle back to fill in with questions
var questions = [
    {
        title:"testing: click response a", 
        choices:["a", " b", " c", " d"],
        answer:"a"
    },
    {
        title:"testing: click response b",
        choices:["a", " b", " c", " d"],
        answer:"b"
    },
    {
        title:"testing: click response c",
        choices:["a", " b", " c", " d"],
        answer:"c"
    }
];
var questionsList = document.querySelector(".questions-list");
var titlePage = document.querySelector(".title-page");
var pageContent = document.querySelector(".page-content");
var questionTitle = document.querySelector("#question-title");
var choiceList = document.querySelector("#choice-list");

//function to start quiz and timer
var startQuiz = function() {
    console.log("startQuiz works");

    //remove previous html
    titlePage.remove();

    //start timer

    //move all of the following insert stuff to next function
    //adding array to html as list items
    var listItemEl = document.createElement("li");
    listItemEl.className = "question-item";
    console.log(listItemEl);

    //adding div to li to hold question info
    var questionInfoEl = document.createElement("div");
    questionInfoEl.className = "question-info";
    console.log(questionInfoEl);
    
    //adding array to div inside li
    questionInfoEl.innerHTML = 
    "<h2 id ='question-title'>" + questions[0].title + "</h2>" +
    "<button id ='choice-list'>" + questions[0].choices[0] + "</button>" +
    "<button id ='choice-list'>" + questions[0].choices[1] + "</button>" +
    "<button id ='choice-list'>" + questions[0].choices[2] + "</button>" +
    "<button id ='choice-list'>" + questions[0].choices[3] + "</button>";
    console.log(questionInfoEl.innerHTML);

    //adding array to page
    listItemEl.appendChild(questionInfoEl);
    questionsList.appendChild(listItemEl);
    console.log(listItemEl.appendChild);
    console.log(questionsList.appendChild);

    clickAnswerButton();
};

//function to select answers in quiz
var clickAnswerButton = function() {
    console.log("clickAnswerButton works");


};

//function to

titlePage.addEventListener("click", startQuiz);
