function getComputerChoice(){
    const computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

// console.log(getComputerChoice())

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerChoice = button.textContent;
        playerChoice = playerChoice.toLowerCase();
        // console.log(playerChoice)
        playRound(playerChoice, getComputerChoice());
    })
})

let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice, computerChoice){
    const resultsContainer = document.querySelector('.results-container');

    if (
        (playerChoice === 'rock' && computerChoice == 'scissors') ||
        (playerChoice === 'paper' && computerChoice == 'rock') ||
        (playerChoice === 'scissors' && computerChoice == 'paper')
    ) {
        resultsContainer.textContent = (`You win! ${playerChoice} beats ${computerChoice}`);
        playerScore++;
    } else if (
        (playerChoice === 'rock' && computerChoice == 'paper') ||
        (playerChoice === 'paper' && computerChoice == 'scissors') ||
        (playerChoice === 'scissors' && computerChoice == 'rock')
    ) {
        resultsContainer.textContent = (`You lose! ${playerChoice} is beaten by ${computerChoice}`);
        computerScore++;
    } else {
        resultsContainer.textContent = (`It's a tie! player chose ${playerChoice} and computer chose ${computerChoice}`);
    }

    displayScore();
    checkWinner();
}

function displayScore() {
    const scoreContainer = document.querySelector('.score-container');
    scoreContainer.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}

function checkWinner(){
    const winnerContainer = document.querySelector('.winner-container');
    if (playerScore >= 5){
        winnerContainer.textContent = 'Winner: Player';
        alert("Congratulations! Player wins.");
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore >= 5){
        winnerContainer.textContent = 'Winner: Computer!';
        alert("Better luck next time. Computer wins.");
        playerScore = 0;
        computerScore = 0;
    } else {
        winnerContainer.textContent = '';
    }
}