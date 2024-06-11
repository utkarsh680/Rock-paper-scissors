let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");

let userCount = "0";
let compCount = "0";

const getCompChoice = () => {
  let compData = ["rock", "paper", "scissors"];
  let compInd = Math.floor(Math.random() * 3);
  return compData[compInd];
};
const drawGame = () => {
  msg.textContent = "Game Draw!";
  msg.style.backgroundColor = "black";
};

const myWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userCount++;
    userScore.textContent = userCount;
    console.log(`You Win! your ${userChoice} beat ${compChoice}`);
    msg.textContent = `You Win! your ${userChoice} beat ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compCount++;
    compScore.textContent = compCount;
    console.log(`You loose! ${compChoice} beats your ${userChoice}`);
    msg.textContent = `You loose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  let compChoice = getCompChoice();
  console.log(userChoice, compChoice);
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //paper //scissors
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    myWinner(userWin, userChoice, compChoice);
  }
};
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
