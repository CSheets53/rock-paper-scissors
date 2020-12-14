const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

let playerScore = 0;
let computerScore = 0;

function getComputerMove() {
    let choice = Math.floor(Math.random() * Math.floor(3));
    if (choice === 0) {
        return ROCK;
    } else if (choice === 1) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

function playRound(e) {
    if (playerScore >= 5 || computerScore >= 5) {
        resetScoresAndText();
    }

    const playerSelection = e.srcElement.id;
    const computerSelection = getComputerMove();

    const playerScoreText = document.querySelector(".player-score");
    const computerScoreText = document.querySelector(".computer-score");
    const moveText = document.querySelector(".move-text");

    if (playerSelection === computerSelection) {
        moveText.textContent = "It's a tie!";
    } else if (playerSelection === ROCK) {
        if (computerSelection === PAPER) {
            computerScore++;
            computerScoreText.textContent = computerScore;
            moveText.textContent = "You Lose! Paper beats Rock.";
        } else {
            playerScore++;
            playerScoreText.textContent = playerScore;
            moveText.textContent = "You Win! Rock beats Scissors.";
        }
    } else if (playerSelection === PAPER) {
        if (computerSelection === ROCK) {
            playerScore++;
            playerScoreText.textContent = playerScore;
            moveText.textContent = "You Win! Paper beats Rock.";
        } else {
            computerScore++;
            computerScoreText.textContent = computerScore;
            moveText.textContent = "You Lose! Scissors beats Paper.";
        }
    } else {
        if (computerSelection === ROCK) {
            computerScore++;
            computerScoreText.textContent = computerScore;
            moveText.textContent = "You Lose! Rock beats Scissors.";
        } else {
            playerScore++;
            playerScoreText.textContent = playerScore;
            moveText.textContent = "You Win! Scissors beats Paper."
        }
    }

    checkGameState();
}

function checkGameState() {
    const moveText = document.querySelector(".move-text");

    if (playerScore >= 5) {
        moveText.textContent = "Congratulations, you won! Click a button to restart.";
    }

    if (computerScore >= 5) {
        moveText.textContent = "Sorry, you lost. Click a button to restart.";
    }
}

function resetScoresAndText() {
    const playerScoreText = document.querySelector(".player-score");
    const computerScoreText = document.querySelector(".computer-score");

    playerScore = 0;
    computerScore = 0;

    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
}

function game() {
    const choices = document.querySelectorAll(".choice");
    choices.forEach(choice => choice.addEventListener("click", playRound));
}

game();