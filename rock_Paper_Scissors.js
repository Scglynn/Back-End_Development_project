const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error, Type either rock, paper, or scissors.');
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random()*3);
  switch(randomNumber) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice) {
    return 'No winner it\'s a tie'
  } else if(userChoice === 'rock') {
    if(computerChoice === 'paper') {
      return 'Paper beats rock!\nThe Computer WINS!';
    } else {

      return 'Rock beats scissors!\nUser WINS!';
    }
  } else if(userChoice === 'paper') {
    if(computerChoice === 'scissors') {
      return 'Scissors beats paper!\nThe Computer WINS!';
    } else {
      return 'Paper beats rock!\nUser WINS!';
    }
  } else if(userChoice === 'scissors') {
    if(computerChoice === 'rock') {
      return 'Rock beats scissors!\nThe Computer WINS!';
    } else {
      return 'Scissors beats paper!\nUser WINS!';
    }
  } else {
    return 'Bomb beats everything!\nUser WINS!';
  }
}

const playGame = () => {

  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);

  console.log(determineWinner(userChoice,computerChoice));
  
}

playGame();
