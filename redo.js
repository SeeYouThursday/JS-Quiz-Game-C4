// timer

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
