// timer
let timeEl = document.querySelector("#main");
const timer = document.querySelector("#timer");
const startQs = document.querySelector("#questionContainer");
let secondsLeft = 120;
startBtn = document.getElementById("start");
// setInterval just tells how to count down on  the timer
function setTime() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft + " seconds left";
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      getGoodMessage();
    }
  }, 1000);

  function getGoodMessage() {
    timer.textContent = "Get Rekt, Loser!";
  }
}
// Start Button Functionality - EventListener

function hideInstructions() {
  // hide instructions & button on click
  startBtn.addEventListener("click", function (event) {
    var begin = event.target;
    setTime();
    if (begin.matches(".startDisplay")) {
      begin.setAttribute("style", "display: none;");
      const instructions = document.querySelector("#instruction-contents");
      instructions.setAttribute("style", "display: none");
      const startQs = document.querySelector("#questionContainer");
      startQs.setAttribute("style", "display: flex");
    } else return;
    // prevents Bubbling!
    event.stopPropagation();
    // display first question
    initialQuestionDisplay();
  });
}
hideInstructions();

const Q1 = {
  title: "What is the best way to make a JS quiz",
  opt1: "hello",
  opt2: "purple",
  opt3: "Google",
  opt4: "red",
  answer: 3,
};

const Q2 = {
  title: "2",
  opt1: "hello",
  opt2: "purple",
  opt3: "green",
  opt4: "red",
  answer: 3,

  // correct: Q2.opt3,
};

const Q3 = {
  title: "3",
  opt1: "hello",
  opt2: "purple",
  opt3: "green",
  opt4: "red",
  answer: 3,

  // correct: Q2.opt3,
};

const Q4 = {
  title: "4",
  opt1: "hello",
  opt2: "purple",
  opt3: "green",
  opt4: "red",
  answer: 3,
};

const questions = [Q1, Q2, Q3, Q4];
// generate index

let generatedIndex = 0;
let questionSelect = questions[generatedIndex];
console.log(questionSelect);

function initialQuestionDisplay() {
  const qTitle = document.querySelector("#questionTitle");
  qTitle.textContent = "Question: " + questionSelect.title;
  const choice1 = document.querySelector("#c1");
  choice1.textContent = questionSelect.opt1;
  const choice2 = document.querySelector("#c2");
  choice2.textContent = questionSelect.opt2;
  const choice3 = document.querySelector("#c3");
  choice3.textContent = questionSelect.opt3;
  const choice4 = document.querySelector("#c4");
  choice4.textContent = questionSelect.opt4;
}
// naming function outside of eventlistener

// the below question does not work
function cycleQuestions(generatedIndex) {
  if (generatedIndex < 6) {
    generatedIndex++;
    console.log("index", generatedIndex);
    initialQuestionDisplay();
  } else return;
}

const userChoice = document.querySelector("#answerChoices");
userChoice.addEventListener("click", function checkAnswer(event) {
  youClicked = event.target;
  value = event.target.getAttribute("data-number");
  console.log(value);
  if (value == questionSelect.answer) {
    youClicked.classList.add("correct");
    let message = document.createElement("p");
    document.getElementById("questionContainer");
  } else {
    youClicked.classList.add("wrong");
  }
  setTimeout(function () {
    youClicked.classList.remove("wrong", "correct");
    cycleQuestions();
  }, 1000);
});
// even though all of li have .choice, only the first element will trigger the event
// Question Generation

// // put in an if statement to check answers for each?
// const correctAnswers = [Q1.correct, Q2.opt3, Q3.opt1, Q4.opt4];
// // questions into an array with properties
// const questionList = [
//   {
//     title: "1",
//     opt1: "hello",
//     opt2: "purple",
//     opt3: "green",
//     opt4: "red",
//   },
//   Q2,
//   Q3,
//   Q4,
// ];

// function enterAnswerChoice() {
//   // question title insert
//   for (let prop in Q1) {
//     const qTitle = document.querySelector("#questionTitle");
//     qTitle.innerHTML = "Question: " + title;
//     const choice1 = document.querySelector("#c1");
//     choice1.innerHTML = questionList[opt1];
//     const choice2 = document.querySelector("#c2");
//     choice2.innerHTML = Q1[opt2];
//     const choice3 = document.querySelector("#c3");
//     choice3.innerHTML = questionList[i].opt3;
//     const choice4 = document.querySelector("#c4");
//     choice4.innerHTML = questionList[i].opt4;
//   }
// }

// enterAnswerChoice();

// Checking correctAnswers
// function checkingAnswers() {
//   const userChoices = document.getElementsByClassName(".answerChoices");
//   userChoices.addEventListener("click", function (event) {
//     let youClicked = event.target;
//     for (var i; i < 4; i++) {
//       if (youClicked === questionList.Q[i].correct) {
//         const correctMessage = document.crea2teElement("p");
//         correctMessage.textContent = "Correct! You're not dumb!";
//         startQs.appendChild("correctMessage");
//       } else secondsLeft - 5;
//     }
//   });
// }

// checkingAnswers();

// event listener for userChoice
// startQs.children[0].innerHTML =
// let userChoice = "";
// function checkAnswers() {}
// if (userChoice === questionList[i].correct) {
// }
