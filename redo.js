// timer
let timeEl = document.querySelector("#main");
const timer = document.querySelector("#timer");
let secondsLeft = 60;

// setInterval just tells how to count down on  the timer
function setTime() {
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      //   getGoodMessage();
    }
  }, 1000);

  //   function getGoodMessage() {
  //     timeEl.textContent = " ";
  //     var imgEl = document.createElement("img");
  //     imgEl.setAttribute("src", "./images/image_1.jpg");
  //     mainEl.appendChild(imgEl);
  //   }
}
// Start Button Functionality - EventListener

function hideInstruction() {
  startBtn = document.getElementById("start");
  // hide instructions & button on click
  startBtn.addEventListener("click", function (event) {
    var begin = event.target;

    // const instructions = document.getElementsByClassName("startDisplay");
    if (begin.matches(".startDisplay")) {
      const startDisplay = document.querySelector(".startDisplay");
      startDisplay.setAttribute("style", "display: none;");
      const startQs = document.querySelector("#questionContainer");
      startQs.setAttribute("style", "display: block");
    } else return;
    // prevents Bubbling!
    event.stopPropagation();
    // display first question
  });
  setTime();
}
hideInstruction();

const Q1 = {
  wrong1: "hello",
  wrong2: "purple",
  correct: "green",
  wrong3: "red",
};
// Question Generation
const questionList = [Q1, "Q2", "Q3", "Q4"];

console.log(questionList[0]);
