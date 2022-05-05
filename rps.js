// Rock paper scissors logic
const options = ["scissors", "paper", "rock"]
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    return options[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    player = playerSelection.toLowerCase();
    result = document.querySelector('.result');

    switch (player) {
        case "scissors":
            if (computerSelection == "scissors") {
                result.textContent = "It's a tie!";
                break;
            }
            else if (computerSelection == "paper") {
                result.textContent = "You win!";
                playerScore++;
                return playerScore;
                break;
            }
            result.textContent = "You lose!";
            computerScore++;
            return computerScore;
        case "paper":
            if (computerSelection == "scissors") {
                result.textContent = "You lose!";
                computerScore++;
                break;
            }
            else if (computerSelection == "paper") {
                result.textContent = "It's a tie!"
                break;
            }
            result.textContent = "You win!";
            playerScore++;
        case "rock":
            if (computerSelection == "scissors") {
                result.textContent = "You win!";
                playerScore++;
                break;
            }
            else if (computerSelection == "paper") {
                result.textContent = "You lose!";
                computerScore++;
                break;
            }
            result.textContent = "It's a tie!";
    }
}

function updateScore() {
    playerScoreboard = document.getElementById('playerScore');
    computerScoreboard = document.getElementById('computerScore');

    playerScoreboard.innerHTML = `Player score: ${playerScore}`;
    computerScoreboard.innerHTML = `Computer score: ${computerScore}`;
}

function gameEnd() {
    game = document.getElementById('gameEnd');
    if (playerScore == 5) {
        game.innerHTML = "You win the game!";
    }
    else if (computerScore == 5) {
        game.innerHTML = "The computer wins the game!";
    }
}

// Event listeners
const rock = document.querySelector('#rock');
rock.addEventListener('click', function () {
    playRound("rock", computerPlay());
    updateScore();
    gameEnd();
    }, false);

const paper = document.querySelector('#paper');
paper.addEventListener('click', function () {
    playRound("paper", computerPlay());
    updateScore();
    gameEnd();
    }, false);

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function () {
    playRound("scissors", computerPlay());
    updateScore();
    gameEnd();
    }, false);

