const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ) {
    return userInput;
  } else {
    console.log('Error!');
  }}
  
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random(0,2)*3);
    switch (randomNumber) {
      case 0:
        return 'rock';
        break;
      case 1: 
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
  }
  
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
    return 'The game is a tie!';
    }
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'You lost to the Computer!';
      } else {
        return 'You won!';
      }    
    }
    if (userChoice === 'paper') { //where is the closing brace for this block?
      if (computerChoice === 'scissors') {
        return 'You lost to the Computer!';
      } else {
        return 'You won!';
      }
      if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
          return 'You lost to the Computer!';
        } else {
          return 'You won!';
        }
      }
      if (userChoice === 'bomb') {
        return 'You Win, Cheater!';
      }
    } //found it! 
  }
  
  const playGame = () => {
    let userChoice = getUserChoice('rock');
    let computerChoice = getComputerChoice();
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  }
  playGame()
  