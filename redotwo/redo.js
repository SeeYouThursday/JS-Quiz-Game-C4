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

function initialQuestionDisplay() {
  
}

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
