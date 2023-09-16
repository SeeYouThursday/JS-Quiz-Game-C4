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
// choices
const choice1 = document.querySelector("#c1");
const choice2 = document.querySelector("#c2");
const choice3 = document.querySelector("#c3");
const choice4 = document.querySelector("#c4");

// various game data
let secondsLeft = 60;
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

const checkInput = () => {
  if (initials.value !== "") {
    writeScores();
  } else return;
};

function endGame() {
  offSetTimeDelay();
  let finalScore = secondsLeft + yourScore;
  scoreText.textContent = finalScore;
  timer.textContent = "Time: " + secondsLeft + " seconds";
  // scoreText.classList.remove("hide");
  collectHighscore.classList.remove("hide");
  checkInput();
  document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
    if (initials.value !== "") {
      // let storeScore = finalScore;
      let initialsSet = initials.value;
      localStorage.setItem("yourScore", finalScore);
      localStorage.setItem("yourInitials", initialsSet);
      displayHighScores();
    }
  });
}

function displayHighScores() {
  let userScore = localStorage.getItem("yourScore");
  let yourInitials = localStorage.getItem("yourInitials");
  if (yourInitials !== null) {
    let writingInitials = document.createElement("p");
    writingInitials.textContent =
      "Player: " + yourInitials + "   Score: " + userScore;
    document.getElementById("leaderboard").append(writingInitials);
  } else return;
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
  choice1.textContent = questionList[0].opt1;
  choice2.textContent = questionList[0].opt2;
  choice3.textContent = questionList[0].opt3;
  choice4.textContent = questionList[0].opt4;
}

// choosing an answer and checking it
const checkAnswers = (event) => {
  event.stopPropagation();
  youClicked = event.target;
  value = event.target.getAttribute("data-number");
  if (value == questionList[0].answer) {
    right(youClicked);
  } else {
    wrongAnswer(youClicked);
  }
};

const right = (event) => {
  yourScore += 10;
  youClicked.classList.add("correct");
  // correct message below
  const rightio = document.getElementById("right");
  rightio.textContent = "Wow, you do know how to read!";
  // rightio.classList.remove("hide");
  setTimeout(function () {
    youClicked.classList.remove("correct");
    rightio.textContent = "";
  }, 500);
};
const wrongAnswer = (event) => {
  youClicked.classList.add("wrong");
  const wrong = document.getElementById("wrong");
  wrong.textContent = "Get Good, Scrub!";
  setTimeout(function () {
    wrong.textContent = "";
    youClicked.classList.remove("wrong");
    if (secondsLeft > 10) {
      secondsLeft -= 10;
    } else endGame();
  }, 500);
};

// const selectingButtons = [choice1, choice2, choice3, choice4];

// selectingButtons.forEach(() => {
//   selectingButtons.choiceEventListener;
// });

// const choiceEventListener = addEventListener("click", function (event) {
//   checkAnswers(event);
//   nextQuestion(event);
// });
const nextQuestion = (event) =>
  setTimeout(function () {
    event.stopPropagation();
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

// userchoice event listeners
choice1.addEventListener("click", function (event) {
  checkAnswers(event);
  nextQuestion(event);
});

choice2.addEventListener("click", function (event) {
  checkAnswers(event);
  nextQuestion(event);
});

choice3.addEventListener("click", function (event) {
  checkAnswers(event);
  nextQuestion(event);
});

choice4.addEventListener("click", function (event) {
  checkAnswers(event);
  nextQuestion(event);
});

// Refresh function on Reset Btn
reset.addEventListener("click", function (event) {
  event.stopPropagation();
  window.location.reload();
  submit.setAttribute("disabled", "false");
});

submit.addEventListener("click", function () {
  if (initials.value === "") {
    alert("Hey, dummy! Enter your initials!");
  } else {
    displayHighScores();
    submit.setAttribute("disabled", "true");
  }
});

// toggle HighScores Button
const getHS = document.getElementById("toggle-HS");
// getHS.addEventListener("click", function () {
//   getHS.classList.remove("hide");
// });
