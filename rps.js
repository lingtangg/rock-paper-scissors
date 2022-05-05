// Rock paper scissors logic
const options = ["scissors", "paper", "rock"]

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
                break;
            }
            result.textContent = "You lose!";
        case "paper":
            if (computerSelection == "scissors") {
                result.textContent = "You lose!";
                break;
            }
            else if (computerSelection == "paper") {
                result.textContent = "It's a tie!"
                break;
            }
            result.textContent = "You win!";
        case "rock":
            if (computerSelection == "scissors") {
                result.textContent = "You win!";
                break;
            }
            else if (computerSelection == "paper") {
                result.textContent = "You lose!";
                break;
            }
            result.textContent = "It's a tie!"
    }
}

// Event listeners
const rock = document.querySelector('#rock');
rock.addEventListener('click', function () {
    playRound("rock", computerPlay())
    }, false);

const paper = document.querySelector('#paper');
paper.addEventListener('click', function () {
    playRound("paper", computerPlay())
    }, false);

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function () {
    playRound("scissors", computerPlay())
    }, false);