// Pseudocode
// Initialize variables: 
//   Choices: Rock Paper Scissors
//   Rounds: 5
// Function to get player choice
// Function to get computer choice
// Function to determine winner
// Main game loop

function getPlayerChoice(){
  let choice = prompt('Enter rock, paper, or scissors:');

  return choice.toLowerCase();
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

console.log(getPlayerChoice());
console.log(getComputerChoice());
