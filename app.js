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
  let input = false;
  while (input === false){
    const choice = prompt('Enter rock, paper, or scissors:');
    if (choice == null){
      continue;
    }

    const choiceLowerCase = choice.toLowerCase();
    if (
    (choiceLowerCase !== 'rock') &&
    (choiceLowerCase !== 'paper') &&
    (choiceLowerCase !== 'scissors')
    ){
      continue;
    } else{
      input = true;
      return choiceLowerCase;
    }
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

// main game
function playGame(){
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 1; i < 6; i++){
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    console.log(`Round ${i}`);
    console.log('Player Choice:', playerChoice);
    console.log('Computer Choice:', computerChoice);
    console.log(playRound(playerChoice, computerChoice));
    console.log('-----')

    if (winCheck(playerChoice, computerChoice) === 'tie'){
      playerScore += 0.5;
      computerScore += 0.5;
    } else if (winCheck(playerChoice, computerChoice) === 'player'){
      playerScore++;
    } else {
      computerScore++;
    }
  }

  console.log('Player Score:', playerScore);
  console.log('Computer Score:', computerScore);

  if (playerScore === computerScore){
    console.log('Game ends in a draw');
  } else if (playerScore > computerScore){
    console.log('Game over! Player wins');
  } else{
    console.log('Game over! Computer wins');
  }
}

console.log(playGame());