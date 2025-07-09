let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

// Determines if the human or computer is closer to the target
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
    const humanDiff = Math.abs(humanGuess - targetGuess);
    const computerDiff = Math.abs(computerGuess - targetGuess);
    
    if(humanDiff <= computerDiff) {
      return true;
    } else {
      return false;
    }
};


const updateScore = winner => {
    if (winner === "human") {
        humanScore += 1;
    } else if (winner === "computer") {
        computerScore += 1;
    } else {
        return "Error!!! Please check your code";
    }
};

const advanceRound = () => {
  return currentRoundNumber += 1;
};
