const MAX = 3;
let playerScore = 0;
let computerScore = 0;
let btnRock = document.getElementById("btnRock");
let btnPaper = document.getElementById("btnPaper");
let btnScissor = document.getElementById("btnScissor");
let img = document.getElementById("pic");
let comImg = document.getElementById("comPic")
let scoreP = document.querySelector(".player");
let scoreC = document.querySelector(".computer");

scoreP.textContent="Score: "+ playerScore;
scoreC.textContent="Score: "+ computerScore;
btnRock.addEventListener("click", (e) => {
    let rock = e.target.innerText.toLowerCase();

    return playRound(rock, getComputerChoice());
});


btnPaper.addEventListener("click", (e) => {
    let paper = e.target.innerText.toLowerCase();

    return playRound(paper, getComputerChoice());
});
btnScissor.addEventListener("click", (e) => {
    let scissor = e.target.innerText.toLowerCase();

    return playRound(scissor, getComputerChoice());
});

function disableButton() {
    btnRock.disabled = true;
    btnPaper.disabled = true;
    btnScissor.disabled = true;
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * MAX) + 1;
    if (choice === 1) {
        comImg.src="./rock.png";
        return "rock";
    } else if (choice === 2) {
        comImg.src="./paper.jpg";
        return "paper";
    } else if (choice === 3) {
        comImg.src="./scissor.jpg";
        return "scissors";
    }

}

function playRound(playerSelection, computerSelection) {
    if(playerSelection==="rock"){
        img.src="./rock.png";
    } else if(playerSelection ==="paper"){
        img.src="./paper.jpg";
    }else if (playerSelection === "scissors"){
        img.src="./scissor.jpg";
    }
    
    if ((playerSelection === "rock" && computerSelection === "scissors")
        || (playerSelection === "paper" && computerSelection === "rock")
        || (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore++;
        scoreP.textContent="Score: "+ playerScore;
    
        console.log('You win! ' + playerSelection + ' beats ' + computerSelection
            + " Player score: " + playerScore + " Computer score: " + computerScore);

        if (playerScore === 5) {
            disableButton();
           setTimeout(function() { alert("You are the winner!!! with " + playerScore + " wins! while the computer had " + computerScore + "."); }, 200); 
        }
       
    } else if (playerSelection === computerSelection) {
        setTimeout(function() { alert("you both tied"); }, 200); 
    } else {
        computerScore++;
        scoreC.textContent="Score: "+computerScore;
     
        console.log('You lose! ' + computerSelection + ' beats ' + playerSelection
            + " Player score: " + playerScore + " Computer score: " + computerScore)
        if (computerScore === 5) {
            disableButton();
         setTimeout(function() { alert("You lost with " + playerScore + ". The computer won with " + computerScore + "."); }, 200); 
        }
    }
}