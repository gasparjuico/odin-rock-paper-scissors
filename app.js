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
    return 'tie';
  } else if (
    (playerChoice === 'rock' && computerChoice == 'scissors') ||
    (playerChoice === 'paper' && computerChoice == 'rock') ||
    (playerChoice === 'scissors' && computerChoice == 'paper')
  ){
    return 'player';
  } else {
    return 'computer';
  }
}

function playRound(playerChoice, computerChoice){
  const result = winCheck(playerChoice, computerChoice);
  if (result === 'tie'){
    return "It's a tie.";
  } else if (result === 'player'){
    return `Player Wins! ${playerChoice} beats ${computerChoice}`;
  } else {
    return `Computer Wins! ${computerChoice} beats ${playerChoice}`;
  }
}

// console.log(playRound(playerChoice, computerChoice));
// console.log('Player Score:', playerScore);
// console.log('Computer Score:', computerScore);

// main game
function playGame(){
  for (let i = 0; i < 5; i++){
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    console.log(`Round ${i}`)
    console.log('Player Choice:', playerChoice);
    console.log('Computer Choice:', computerChoice);
    console.log(playRound(playerChoice, computerChoice));
  }
}

console.log(playGame());