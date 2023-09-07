// let createTag = document.createElement();

// directions on how to play the game

// start button
function createStartButton() {
  const genBtn = document.createElement("button");
  genBtn.textContent = "Start!";
  genBtn.setAttribute("id", "start");
  document.body.appendChild(genBtn);
  genBtn.setAttribute("style", "display: block;");
  // start btn styling is in css
}
createStartButton();

// start button functionality

function startGame() {
  const start = document.getElementById("start");
  start.addEventListener("click", function hideStartButton() {
    start.setAttribute("style", "display: none;");
  });
}

startGame();
// high score display

// timer display and functions

// Question Container

// Choice Container

// Enter Initials for High Score
