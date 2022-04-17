function rockPaperScissors() {
  let randomNumbers = Math.floor(Math.random() * 3 + 1);
  if (randomNumbers <= 1) {
    return "rock";
  } else if (randomNumbers <= 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

let mainBody = document.querySelector("body");

function checkIfWin(choice) {
  let botChoice = rockPaperScissors();
  if (
    (choice === "rock" && botChoice === "scissors") ||
    (choice === "paper" && botChoice === "rock") ||
    (choice === "scissors" && botChoice === "paper")
  ) {
    console.log("You Win!");
    document.querySelector("#resultsDisplay").innerText = "You Win!";
    mainBody.style.backgroundColor = "lightgreen";
  } else if (choice === botChoice) {
    console.log("Draw");
    document.querySelector("#resultsDisplay").innerText = "Draw!";
    mainBody.style.backgroundColor = "white";
  } else {
    console.log("You lose... Try again!");
    document.querySelector("#resultsDisplay").innerText =
      "You lose... Try again!";
    mainBody.style.backgroundColor = "red";
  }
}

//rock event
document.querySelector("#choiceRock").addEventListener("click", buttonRock);

function buttonRock() {
  let getRockInfo = document.querySelector("#choiceRock").value;
  console.log(getRockInfo);
  checkIfWin("rock");
}

//paper event
document.querySelector("#choicePaper").addEventListener("click", buttonPaper);

function buttonPaper() {
  let getPaperInfo = document.querySelector("#choicePaper").value;
  console.log(getPaperInfo);
  checkIfWin("paper");
}

//scissors event
document
  .querySelector("#choiceScissors")
  .addEventListener("click", buttonScissors);

function buttonScissors() {
  let getScissorsInfo = document.querySelector("#choiceScissors").value;
  console.log(getScissorsInfo);
  checkIfWin("scissors");
}
