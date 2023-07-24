let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
// Function to generate random int between 1 and 9
function generateTarget() {
  return Math.floor(Math.random()*10)
}

const compareGuesses = (humanGuess, computerGuess, target) => {
  if (Math.abs(target - humanGuess) <= Math.abs(computerGuess - target)) {
    return true;
  } else {
    return false;
  }
}
// console.log(compareGuesses(5,2,3))

const updateScore = whoWins => {
  switch (whoWins) {
    case 'human':
      humanScore +=1;
      break;
    case 'computer':
      computerScore +=1;
      break;
  }
}

const advanceRound = () => {
  currentRounderNumber +=1
}