// Selectors
let timeEl = document.querySelector("#main");
const timer = document.querySelector("#timer");
const startQs = document.querySelector("#questionContainer");
const scoreText = document.querySelector("#show-score");
const collectHighscore = document.getElementById("collectHighscore");
const initials = document.getElementById("initials");
const startBtn = document.getElementById("start");
const userChoice = document.querySelector("#answerChoices");
const reset = document.getElementById("reset");
const submit = document.getElementById("submit");
// various game data
let secondsLeft = 60;
const leaderboards = [];
let storedHighScores = {};
let yourScore = 0;
const questionList = [
  {
    title: "Why won't I show up1?",
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
function setTime() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft + " second(s) left";
    if (secondsLeft == 0) {
      clearInterval(timerInterval, 0);
      startQs.setAttribute("style", "display:none");
      endGame();
      getGoodMessage();
    }
    // stops timer when out of questions from set
    if (questionList.length == 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
  function getGoodMessage() {
    const youSuck = document.createElement("h3");
    youSuck.textContent = "Get Rekt, Loser!";
    const header = document.getElementsByName("header");
    youSuck.append(header);
  }
}

function offSetTimeDelay() {
  secondsLeft += 1;
}

function endGame() {
  offSetTimeDelay();
  scoreText.textContent = yourScore + secondsLeft;
  // scoreText.classList.remove("hide");
  collectHighscore.classList.remove("hide");
  document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
    let yourScore = secondsLeft;
    let initialsSet = initials.value;
    console.log(initialsSet);
    localStorage.setItem("yourScore", yourScore);
    localStorage.setItem("yourInitials", initialsSet);
    displayHighScores();
    leaderboards.push("Player: " + initialsSet + " Highscore: " + yourScore);
  });
  timer.textContent = "Time: " + secondsLeft + " seconds";
}

function displayHighScores() {
  let userScore = localStorage.getItem("yourScore");
  let userInitials = localStorage.getItem("yourInitials");
  writingInitials = document.createElement("li");
  writingInitials.textContent =
    "Player: " + userInitials + "   Score: " + userScore;
  document.getElementById("leaderboard").append(writingInitials);
  storedHighScores = "Player: " + userInitials + " Highscore: " + userScore;
  for (var i = 0; i < leaderboards.length; i++) {
    let liEl = document.createElement("li");
    liEl.textContent(leaderboards[i]);
    liEl.append("#leaderboard");
  }
}
displayHighScores();

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
  scoreText.textContent = yourScore;
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
for (var i = 0; i < 4; i++) {
  userChoice.children[i].addEventListener("click", function checkAnswer(event) {
    event.stopPropagation();
    youClicked = event.target;
    value = event.target.getAttribute("data-number");
    if (value == questionList[0].answer) {
      yourScore += 10;
      event.stopPropagation();
      youClicked.classList.add("correct");
      // correct message below

      const right = document.getElementById("right");
      right.textContent = "Wow, you do know how to read!";
      right.classList.remove("hide");
      setTimeout(function () {
        right.classList.add("hide");
      }, 500);
    } else {
      event.stopPropagation();
      youClicked.classList.add("wrong");

      const wrong = document.getElementById("wrong");
      wrong.textContent = "Get Good, Scrub!";
      wrong.classList.remove("hide");
      setTimeout(function () {
        wrong.classList.add("hide");
      }, 500);
      if (secondsLeft > 10) {
        secondsLeft -= 10;
      } else endGame();
    }

    nextQuestion(event);
  });
}
const nextQuestion = (event) =>
  setTimeout(function () {
    event.stopPropagation();
    // choices.setAttribute("disabled", true);
    youClicked.classList.remove("wrong", "correct");
    questionList.splice(0, 1);
    // checks to see if all questions have been gone through
    if (questionList.length == 0) {
      startQs.setAttribute("style", "display:none");
      reset.classList.remove("hide");
      const end = document.getElementById("endGame");
      end.classList.remove("hide");
      end.classList.add("flex");
      // getHS.classList.remove("hide");
    } else QuestionDisplay();
  }, 1000);

// Refresh function on Reset Btn
reset.addEventListener("click", function (event) {
  event.stopPropagation();
  window.location.reload();
  submit.setAttribute("disabled", "false");
});

submit.addEventListener("click", function () {
  if (initials.value === "") {
    alert("Hey, dummy! Enter your initials!");
  } else submit.setAttribute("disabled", "true");
});

// toggle HighScores Button
const getHS = document.getElementById("toggle-HS");
// getHS.addEventListener("click", function () {
//   getHS.classList.remove("hide");
// });
