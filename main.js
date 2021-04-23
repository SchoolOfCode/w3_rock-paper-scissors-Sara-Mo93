const playerScore = document.getElementById("userScore");
const computerScore = document.getElementById("cuScore");
const rockemoji = document.getElementById("rockbtn");
const paperemoji = document.getElementById("pbtn");
const scissoremoji = document.getElementById("scsbtn");
const userInput = document.getElementById("playername").value; //would be nice to display name as player
document.getElementById("playername").innerText = userInput;

let pScore = 0;
let cScore = 0;
let round = 0;
let userChoice = rockemoji || paperemoji || scissoremoji;
let computerChoice;
rockemoji.addEventListener("click", play);
paperemoji.addEventListener("click", play);
scissoremoji.addEventListener("click", play);

function getComputerChoice() {
  computerChoice = Math.random();
  if (computerChoice < 0.34) {
    computerChoice = "rock";
    return "rock";
  } else if (computerChoice <= 0.67) {
    computerChoice = "paper";
    return "paper";
  } else {
    computerChoice = "scissors";
    return "scissors";
  }
}

function play(event) {
  getComputerChoice();
  getWinner(userChoice, computerChoice);
  return;
}

function getWinner(userChoice, computerChoice) {
  document.getElementById("GameRound").innerHTML = "Round " + round;
  round++;
  if (userChoice === rockemoji && computerChoice === "rock") {
    document.getElementById("userScore").innerHTML = "Player Score " + pScore;
    document.getElementById("cuScore").innerHTML = "Computer Score " + cScore;
    console.log(
      "Player chooses rock! Computer chooses rock! It's a draw in this round!"
    );
  } else if (userChoice === paperemoji && computerChoice === "paper") {
    document.getElementById("userScore").innerHTML = "Player Score " + pScore;
    document.getElementById("cuScore").innerHTML = "Computer Score " + cScore;
    console.log(
      "Player chooses paper! Computer chooses paper! It's a draw in this round!"
    );
  } else if (userChoice === scissoremoji && computerChoice === "scissors") {
    document.getElementById("userScore").innerHTML = "Player Score " + pScore;
    document.getElementById("cuScore").innerHTML = "Computer Score " + cScore;
    console.log(
      "Player chooses scissors! Computer chooses scissors! It's a draw in this round!"
    );
  } else if (userChoice === rockemoji && computerChoice === "paper") {
    document.getElementById("cuScore").innerHTML = "Computer Score " + cScore++;
    document.getElementById("userScore").innerHTML = "Player Score " + pScore;
    console.log(
      "Player chooses rock! Computer chooses paper! Computer wins this round!"
    );
  } else if (userChoice === rockemoji && computerChoice === "scissors") {
    document.getElementById("cuScore").innerHTML = "Computer Score " + cScore;
    document.getElementById("userScore").innerHTML = "Player Score " + pScore++;
    console.log(
      "Player chooses rock! Computer chooses scissors! Player wins this round!"
    );
  } else if (userChoice === paperemoji && computerChoice === "scissors") {
    document.getElementById("cuScore").innerHTML = "Computer Score " + cScore++;
    document.getElementById("userScore").innerHTML = "Player Score " + pScore;
    console.log(
      "Player chooses paper! Computer chooses scissors! Computer wins this round!"
    );
  } else if (userChoice === paperemoji && computerChoice === "rock") {
    document.getElementById("cuScore").innerHTML = "Computer Score " + cScore;
    document.getElementById("userScore").innerHTML = "Player Score " + pScore++;
    console.log(
      "Player chooses paper! Computer chooses rock! Player wins this round!"
    );
  } else if (userChoice === scissoremoji && computerChoice === "rock") {
    document.getElementById("cuScore").innerHTML = "Computer Score " + cScore++;
    document.getElementById("userScore").innerHTML = "Player Score " + pScore;
    console.log(
      "Player chooses scissors! Computer chooses rock! Computer wins this round!"
    );
  } else if (userChoice === scissoremoji && computerChoice === "paper") {
    document.getElementById("cuScore").innerHTML = "Computer Score " + cScore;
    document.getElementById("userScore").innerHTML = "Player Score " + pScore++;
    console.log(
      "Player chooses scissors! Computer chooses paper! Player wins this round! "
    );
  }
  return;
}
