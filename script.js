/*script.js*/

const getStartedQuestionHeader = document.getElementById("question-header");
const getStartedAnswerOutput = document.getElementById("answer-output-header");

const getStartedAnswer1Box1 = document.getElementById("answer-1-box-1");
const getStartedAnswer1Box2 = document.getElementById("answer-1-box-2");
const getStartedAnswer1Box3 = document.getElementById("answer-1-box-3");

const getStartedAnswer2Box1 = document.getElementById("answer-2-box-1");
const getStartedAnswer2Box2 = document.getElementById("answer-2-box-2");
const getStartedAnswer2Box3 = document.getElementById("answer-2-box-3");

const getStartedAnswer3Box1 = document.getElementById("answer-3-box-1");
const getStartedAnswer3Box2 = document.getElementById("answer-3-box-2");
const getStartedAnswer3Box3 = document.getElementById("answer-3-box-3");

const getStartedAnswer4Box1 = document.getElementById("answer-4-box-1");
const getStartedAnswer4Box2 = document.getElementById("answer-4-box-2");
const getStartedAnswer4Box3 = document.getElementById("answer-4-box-3");

const getStartedAnswer5Box1 = document.getElementById("answer-5-box-1");
const getStartedAnswer5Box2 = document.getElementById("answer-5-box-2");
const getStartedAnswer5Box3 = document.getElementById("answer-5-box-3");

const getStartedAnswerNextBtn = document.getElementById("getstarted-next-button");
var lang = "En";

const question1 = document.getElementById("question-1");
const question2 = document.getElementById("question-2");
const question3 = document.getElementById("question-3");
const question4 = document.getElementById("question-4");
const question5 = document.getElementById("question-5");
const questions = [question1, question2, question3, question4, question5]
const qstsStatments = ["1/5 Choose a language",
                        "2/5 What is your level",
                        "3/5 What drink",
                        "4/5 What team",
                        "5/5 What application"]
var questionIndex = 0;

var level = null;

function changeLang(lang) {
    if (lang === 1) {
        lang = "En";
        getStartedAnswerOutput.innerText = "You Choosed: English";
        getStartedAnswer1Box1.style.backgroundColor = "green";
        getStartedAnswer1Box2.style.backgroundColor = "rgb(196, 193, 193)";
        getStartedAnswer1Box3.style.backgroundColor = "rgb(196, 193, 193)";
    }else if(lang===2) {
        lang = "Ar";
        getStartedAnswerOutput.innerText = "You Choosed: العربية";
        getStartedAnswer1Box2.style.backgroundColor = "green";
        getStartedAnswer1Box1.style.backgroundColor = "rgb(196, 193, 193)";
        getStartedAnswer1Box3.style.backgroundColor = "rgb(196, 193, 193)";
    }else{
        lang = "Fr";
        getStartedAnswerOutput.innerText = "You Choosed: Français";
        getStartedAnswer1Box3.style.backgroundColor = "green";
        getStartedAnswer1Box1.style.backgroundColor = "rgb(196, 193, 193)";
        getStartedAnswer1Box2.style.backgroundColor = "rgb(196, 193, 193)";
    }
    getStartedAnswerNextBtn.style.backgroundColor = "green";
    getStartedAnswerNextBtn.style.opacity = 1;
};

function setLevel(levelp) {
    if (levelp === 1) {
        getStartedAnswerOutput.innerText = "You Choosed: Primary School";
        getStartedAnswer2Box1.style.backgroundColor = "green";
        getStartedAnswer2Box2.style.backgroundColor = "rgb(196, 193, 193)";
        getStartedAnswer2Box3.style.backgroundColor = "rgb(196, 193, 193)";
    }else if(levelp === 2) {
        getStartedAnswerOutput.innerText = "You Choosed: Middle School";
        getStartedAnswer2Box2.style.backgroundColor = "green";
        getStartedAnswer2Box1.style.backgroundColor = "rgb(196, 193, 193)";
        getStartedAnswer2Box3.style.backgroundColor = "rgb(196, 193, 193)";
    }else{
        getStartedAnswerOutput.innerText = "You Choosed: High School";
        getStartedAnswer2Box3.style.backgroundColor = "green";
        getStartedAnswer2Box1.style.backgroundColor = "rgb(196, 193, 193)";
        getStartedAnswer2Box2.style.backgroundColor = "rgb(196, 193, 193)";
    }
    getStartedAnswerNextBtn.style.backgroundColor = "green";
    getStartedAnswerNextBtn.style.opacity = 1;
};

function changeQuestion(value) {
    questionIndex = questionIndex + value;
    if (questionIndex === -1){
        window.location.href = "../index.html";
    }else if(questionIndex === questions.length){
        window.location.href = "../index.html";
    }else {
        questions[questionIndex-value].style.display = "none";
        questions[questionIndex].style.display = "flex";
        getStartedAnswerNextBtn.style.backgroundColor = "rgb(208, 208, 208)";
        getStartedAnswerNextBtn.style.opacity = 0.3;
        getStartedAnswerOutput.innerText = "You Choosed: ";
        getStartedQuestionHeader.innerText = qstsStatments[questionIndex];
    }
}