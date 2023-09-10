// timer
let timeEl = document.querySelector("#main");
const timer = document.querySelector("#timer");
const startQs = document.querySelector("#questionContainer");
let secondsLeft = 60;
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
    timeEl.textContent = "Get Rekt, Loser!";
  }
  //     var imgEl = document.createElement("img");
  //     imgEl.setAttribute("src", "./images/image_1.jpg");
  //     mainEl.appendChild(imgEl);
  //   }
}
// Start Button Functionality - EventListener

function hideInstruction() {
  // hide instructions & button on click
  startBtn.addEventListener("click", function (event) {
    var begin = event.target;
    setTime();
    // const instructions = document.getElementsByClassName("startDisplay");
    if (begin.matches(".startDisplay")) {
      begin.setAttribute("style", "display: none;");
      const startQs = document.querySelector("#questionContainer");
      startQs.setAttribute("style", "display: block");
    } else return;
    // prevents Bubbling!
    event.stopPropagation();
    // display first question
  });
}

startBtn.addEventListener("click", hideInstruction());

const Q1 = {
  wrong1: "hello",
  wrong2: "purple",
  correct: "green",
  wrong3: "red",
};
// Question Generation

const Q2 = {
  title: "2",
  opt1: "hello",
  opt2: "purple",
  opt3: "green",
  opt4: "red",
  // correct: Q2.opt3,
};

// put in an if statement to check answers for each?

// questions into an array with properties
const questionList = [Q1, Q2, "Q3", "Q4"];

console.log(questionList[1]);
function enterQuestions() {
  // question title insert
  for (var i = 0; i < 2; i++) {
    const qTitle = document.querySelector("#questionTitle");
    qTitle.innerHTML = "Question " + questionList[i].title;
  }
  // startQs.children[0].innerHTML =
}

enterQuestions();
