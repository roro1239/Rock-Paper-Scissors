const MAX = 3;
let playerScore = 0;
let computerScore = 0;
const NUMBER_OF_GAMES = 5;
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * MAX);
    if (randomChoice === 0) {
        return "rock"
    } else if (randomChoice === 1) {
        return "paper";
    } else if (randomChoice === 2) {
        return "scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "It's an Tie";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        computerScore++;
        return "You lose, paper beats rock!";
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        playerScore++;
        return "You win, rock beats scissors!";
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        computerScore++;
        return "You lose, scissors beats paper!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You win, paper beats rock!";
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        playerScore++;
        return "You win, scissors beats paper!";
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        computerScore++;
        return "You lose, rock beats scissors!";
    }
}

function game() {
    for (let i = 0; i < NUMBER_OF_GAMES; i++) {
        let player = prompt("Pick Rock, Paper or Scissor");
        console.log(playRound(player, getComputerChoice()));
    }
    if (playerScore > computerScore) {
        return console.log("You are the winner!!! with " + playerScore + " wins! While the bot had " + computerScore + ".");
    } else if (computerScore > playerScore) {
        return console.log("You are the LOSER with" + playerScore + "! The bot wins with " + computerScore);
    } else {
        return console.log("You tied!")
    }
}
game();