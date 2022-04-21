const options = ["scissors", "paper", "rock"]

function computerPlay() {
    return options[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    player = playerSelection.toLowerCase();

    switch (player) {
        case "scissors":
            if (computerSelection == "scissors") {
                return console.log("It's a tie!")
                break;
            }
            else if (computerSelection == "paper") {
                return console.log("You win!")
                break;
            }
            return console.log("You lose!");
        case "paper":
            if (computerSelection == "scissors") {
                return console.log("You lose!")
                break;
            }
            else if (computerSelection == "paper") {
                return console.log("It's a tie!")
                break;
            }
            return console.log("You win!");
        case "rock":
            if (computerSelection == "scissors") {
                return console.log("You win!")
                break;
            }
            else if (computerSelection == "paper") {
                return console.log("You lose!")
                break;
            }
            return console.log("It's a tie!");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt('Your choice?');
        const computerSelection = computerPlay();
        console.log(`Player = ${playerSelection} and Computer = ${computerSelection}`)
        playRound(playerSelection, computerSelection);
    }
}

game();