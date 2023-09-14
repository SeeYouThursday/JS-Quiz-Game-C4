// get elements
let timeEl = document.querySelector("#main");
const timer = document.querySelector("#timer");
const startQs = document.querySelector("#questionContainer");
const scoreText = document.querySelector("#score");
const collectHighscore = document.getElementById("collectHighscore");
const initials = document.getElementById("initials");
const startBtn = document.getElementById("start");

let secondsLeft = 120;
const questionList = [
  {
    title: "Why won't I show up2?",
    opt1: "d",
    opt2: "purple",
    opt3: "green",
    opt4: "red",
    answer: 2,
  },
  {
    title: "Why won't I show up2?",
    opt1: "c",
    opt2: "purple",
    opt3: "green",
    opt4: "red",
    answer: 2,

    // correct: Q2.opt3,
  },
  {
    title: "Why won't I show up?3",
    opt1: "b",
    opt2: "purple",
    opt3: "green",
    opt4: "red",
    answer: 1,
    // correct: Q2.opt3,
  },
  {
    title: "Why won't I show up?4",
    opt1: "a",
    opt2: "purple",
    opt3: "green",
    opt4: "red",
    answer: 2,
  },
];
// setInterval just tells how to count down on  the timer
function setTime() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft + " second(s) left";
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      getGoodMessage();
    }
    // stops timer when out of questions from set
    if (questionList.length == 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
  // message defined below
  function getGoodMessage() {
    timer.textContent = "Get Rekt, Loser!";
  }
}

function endGame() {
  scoreText.textContent = "Your Score: " + secondsLeft;
  scoreText.classList.remove("hide");
  collectHighscore.classList.remove("hide");
  initialCollect();
}

function initialCollect() {
  initials.addEventListener("click", function (event) {
    event.preventDefault(event);
    let score = secondsLeft;
    // console.log(score);
    let yourInitials = initials.value;
    localStorage.setItem("score", score);
    localStorage.setItem("initials", yourInitials);
    // get the score/initial
    // let userScore = localStorage.getItem("score");
    // let userInitials = localStorage.getItem("initials");
  });
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

// display each option set - the click event will cause the first array to be removed, causing the next ? to appear
function QuestionDisplay() {
  const qTitle = document.querySelector("#questionTitle");
  qTitle.textContent = "Question: " + questionList[0].title;
  const choice1 = document.querySelector("#c1");
  choice1.textContent = questionList[0].opt1;
  const choice2 = document.querySelector("#c2");
  choice2.textContent = questionList[0].opt2;
  const choice3 = document.querySelector("#c3");
  choice3.textContent = questionList[0].opt3;
  const choice4 = document.querySelector("#c4");
  choice4.textContent = questionList[0].opt4;
}

// choosing an answer and checking it

const userChoice = document.querySelector("#answerChoices");
userChoice.addEventListener("click", function checkAnswer(event) {
  event.stopPropagation();
  // function wrongChoicePenalty() {
  //   let scorePenalty = ();
  // }
  youClicked = event.target;
  value = event.target.getAttribute("data-number");
  if (value == questionList[0].answer) {
    youClicked.classList.add("correct");
    // correct message below
    // let message = document.createElement("p");
    // document.getElementById("questionContainer");
  } else {
    youClicked.classList.add("wrong");
    secondsLeft -= 5;
    console.log(secondsLeft);
    // need to enter wrong message here
  }
  setTimeout(function () {
    youClicked.classList.remove("wrong", "correct");
    questionList.splice(0, 1);
    // checks to see if all questions have been gone through
    if (questionList.length == 0) {
      startQs.setAttribute("style", "display:none");
    } else QuestionDisplay();
  }, 1000);
});
