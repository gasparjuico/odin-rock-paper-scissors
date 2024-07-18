// Pseudocode
// Initialize variables: 
//   Choices: Rock Paper Scissors
//   Rounds: 5
// Function to get player choice
// Function to get computer choice
// Function to determine winner
// Main game loop

function getPlayerChoice(){
  let choice = prompt('Enter rock, paper, or scissors:').toLowerCase();
  if (
    (choice !== 'rock') &&
    (choice !== 'paper') &&
    (choice !== 'scissors')
  ){
    console.log('Please refresh and input rock, paper, or scissors.')
  } else {
    return choice;
  }
}

function getComputerChoice(){
  let computerChoice = Math.floor(Math.random() * 3);

  if (computerChoice === 0){
    return 'rock';
  } else if (computerChoice === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

// console.log(getPlayerChoice());
// console.log(getComputerChoice());

let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice, computerChoice){
  if (playerChoice === computerChoice){
    return "It's a tie!"
  } else if (
    (playerChoice === 'rock' && computerChoice == 'scissors') ||
    (playerChoice === 'paper' && computerChoice == 'rock') ||
    (playerChoice === 'scissors' && computerChoice == 'paper')
  ){
    playerScore++;
    return `Player Wins! ${playerChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    return `Computer Wins! ${computerChoice} beats ${playerChoice}`;
  }
}

let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();

console.log('Player Choice:', playerChoice);
console.log('Computer Choice:', computerChoice);
console.log(playRound(playerChoice, computerChoice));
console.log('Player Score:', playerScore);
console.log('Computer Score:', computerScore);