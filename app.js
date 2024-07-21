// Pseudocode
// Initialize variables: 
//   Choices: Rock Paper Scissors
//   Rounds: 5
// Function to get player choice
// Function to get computer choice
// Function to determine winner
// Main game loop

// Function to get player choice
function getPlayerChoice(){
  let choice = prompt('Enter rock, paper, or scissors:').toLowerCase();
  if (
    (choice !== 'rock') &&
    (choice !== 'paper') &&
    (choice !== 'scissors')
  ){
    console.log('Please refresh and input rock, paper, or scissors.')
  } else {
    return choice;winCheck
  }
}

// Function to get computer choice
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

// Function to determine winner
function winCheck(playerChoice, computerChoice){
  if (playerChoice === computerChoice){
    playerScore += 0.5;
    computerScore += 0.5;
    return 'tie';
  } else if (
    (playerChoice === 'rock' && computerChoice == 'scissors') ||
    (playerChoice === 'paper' && computerChoice == 'rock') ||
    (playerChoice === 'scissors' && computerChoice == 'paper')
  ){
    playerScore++;
    return 'player';
  } else {
    computerScore++;
    return 'computer';
  }
}

function playRound(playerChoice, computerChoice){
  if (winCheck === 'tie'){
    return "It's a tie.";
  } else if (winCheck === 'player'){
    return `Player Wins! ${playerChoice} beats ${computerChoice}`;
  } else {
    return `Computer Wins! ${computerChoice} beats ${playerChoice}`;
  }
}

let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();

console.log('Player Choice:', playerChoice);
console.log('Computer Choice:', computerChoice);
// console.log(playRound(playerChoice, computerChoice));
// console.log('Player Score:', playerScore);
// console.log('Computer Score:', computerScore);

console.log(playRound(playerChoice, computerChoice));