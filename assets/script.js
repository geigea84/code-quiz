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
var titlePage = document.querySelector(".title-page");
var pageContent = document.querySelector(".page-content");
var questionWrapper1 = document.querySelector("#question-wrapper-1");

//function to start quiz and timer
var startQuiz = function() {
    console.log("startQuiz works");

    //start timer

    //move all of the following insert stuff to next function
    
    //adding array to div inside li
    //questionInfoEl.innerHTML = 
    //"<h2 id ='question-title'>" + questions[0].title + "</h2>" +
    //"<button id ='choice-list'>" + questions[0].choices[0] + "</button>" +
    //"<button id ='choice-list'>" + questions[0].choices[1] + "</button>" +
    //"<button id ='choice-list'>" + questions[0].choices[2] + "</button>" +
    //"<button id ='choice-list'>" + questions[0].choices[3] + "</button>";
    //console.log(questionInfoEl.innerHTML);

    //adding array to page
    //listItemEl.appendChild(questionInfoEl);
    //questionsList.appendChild(listItemEl);
    //console.log(listItemEl.appendChild);
    //console.log(questionsList.appendChild);

    clickAnswerButton1();
};

//function to select answers in quiz
var clickAnswerButton1 = function() {
    console.log("clickAnswerButton works");

    //remove previous html
    titlePage.remove();

    //insert array info
    questionWrapper1.innerHTML = 
    "<h2 class ='question-title'>" + questions[0].title + "</h2>" +
    "<button class ='choice-list'>" + questions[0].choices[0] + "</button>" +
    "<button class ='choice-list'>" + questions[0].choices[1] + "</button>" +
    "<button class ='choice-list'>" + questions[0].choices[2] + "</button>" +
    "<button class ='choice-list'>" + questions[0].choices[3] + "</button>";
    
    if (questions[0].answer.clicked === true) {
        alert("correct button clicked");
    }
};

//function to

titlePage.addEventListener("click", startQuiz);
