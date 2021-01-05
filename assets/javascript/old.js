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
var time = 40
var titlePage = document.querySelector(".title-page");
var pageContent = document.querySelector(".page-content");
var questionWrapper1 = document.querySelector("#question-wrapper-1");
var questionWrapper2 = document.querySelector("#question-wrapper-2");
var questionWrapper3 = document.querySelector("#question-wrapper-3");

//function to decrement time
var removeTime = function() {
    time -= 20;
    
    if (time < 0) {
        time = 0;
    }

    if (time = 0) {
        //end quiz
    }
}

//function to start quiz and timer
var startQuiz = function() {
    console.log("startQuiz works");

    //start timer


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
    "<button class ='choice-list' id='but1'>" + questions[0].choices[0] + "</button>" +
    "<button class ='choice-list' id='but2'>" + questions[0].choices[1] + "</button>" +
    "<button class ='choice-list' id='but3'>" + questions[0].choices[2] + "</button>" +
    "<button class ='choice-list' id='but4'>" + questions[0].choices[3] + "</button>";

    //moving var to global scope won't let me grab innerHTML id---move to outside?
    var right1 = document.getElementById('but1').innerHTML;
    var wrong1 = 
    document.getElementById('but2').innerHTML +
    document.getElementById('but3').innerHTML +
    document.getElementById('but4').innerHTML;

    //move to outside function, add var right1, right 2, right 3?---------------
    right1.addEventListener("click", clickAnswerButton2);
    wrong1.addEventListener("click", clickAnswerButton2, removeTime);
};

var clickAnswerButton2 = function() {
    console.log("event listener worked");
    questionWrapper2.appendChild;
    questionWrapper1.remove;
};


//function to

titlePage.addEventListener("click", startQuiz);