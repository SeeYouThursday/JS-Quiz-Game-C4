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
    // stops timer when out of questions from set
    if (questionList.length == 0) {
      clearInterval(timerInterval);
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
    QuestionDisplay();
  });
}
hideInstructions();

// const Q1 = {
//   title: "What is the best way to make a JS quiz",
//   opt1: "hello",
//   opt2: "purple",
//   opt3: "Google",
//   opt4: "red",
//   answer: 3,
// };

// const Q2 = {
//   title: "Why won't I show up2?",
//   opt1: "hello",
//   opt2: "purple",
//   opt3: "green",
//   opt4: "red",
//   answer: 2,

//   // correct: Q2.opt3,
// };

// const Q3 = {
//   title: "Why won't I show up?3",
//   opt1: "hello",
//   opt2: "purple",
//   opt3: "green",
//   opt4: "red",
//   answer: 1,

//   // correct: Q2.opt3,
// };

// const Q4 = {
//   title: "Why won't I show up?4",
//   opt1: "hello",
//   opt2: "purple",
//   opt3: "green",
//   opt4: "red",
//   answer: 2,
// };

const questionList = [
  {
    title: "What is the best way to make a JS quiz",
    opt1: "hello",
    opt2: "purple",
    opt3: "Google",
    opt4: "red",
    answer: 3,
  },
  {
    title: "Why won't I show up2?",
    opt1: "hello",
    opt2: "purple",
    opt3: "green",
    opt4: "red",
    answer: 2,

    // correct: Q2.opt3,
  },
  {
    title: "Why won't I show up?3",
    opt1: "hello",
    opt2: "purple",
    opt3: "green",
    opt4: "red",
    answer: 1,
    // correct: Q2.opt3,
  },
  {
    title: "Why won't I show up?4",
    opt1: "hello",
    opt2: "purple",
    opt3: "green",
    opt4: "red",
    answer: 2,
  },
];
// const questions = [Q1, Q2, Q3, Q4];
// generate index

// let generatedIndex = questions.length - 1;
// let questionSelect = questions[generatedIndex];
// console.log(questionSelect);

function QuestionDisplay() {
  const qTitle = document.querySelector("#questionTitle");
  qTitle.textContent = "Question: " + questionList[0].title;
  const choice1 = Array.from(document.querySelectorAll(".choice"));
  choice1.forEach((choice1) => {
    console.log(choice1);
    let choiceNum = choice1.dataset["number"];
    if (choiceNum > 0) {
      choice1.innerHTML = questionList["choice" + choiceNum];
    }
  });
}

function endGame() {
  if (questionList == null) {
    startQs.setAttribute("style", "display:none");
  } else QuestionDisplay();
}

// choosing an answer and checking it
const userChoice = document.querySelector("#answerChoices");
userChoice.addEventListener("click", function checkAnswer(event) {
  youClicked = event.target;
  value = event.target.getAttribute("data-number");
  if (value == questionList[0].answer) {
    youClicked.classList.add("correct");
    // correct message below
    // let message = document.createElement("p");
    // document.getElementById("questionContainer");
  } else {
    youClicked.classList.add("wrong");
    // need to enter wrong message here
  }
  setTimeout(function () {
    youClicked.classList.remove("wrong", "correct");
    questionList.splice(0, 1);
    // checks to see if all questions have been gone through
    if (questionList.length == 0) {
      startQs.setAttribute("style", "display:none");
    } else QuestionDisplay();
    // endGame();

    console.log(questionList);
  }, 1000);
});

// splice function
// function nextQuestion() {
//   initialQuestionDisplay(generatedIndex);
// }

// Question Generation

// // put in an if statement to check answers for each?
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
