console.log("Hi There!");

/* 
    Rock, Paper, Scissors
    - User makes a choice
    - Computer makes a choice
    - Compare choices
    - Determine winner
    - Display winner
*/

let humanScore = 0;
let computerScore = 0;

const getHumanChoice = () => {
    const humanChoice = prompt('Rock, Paper, or Scissors?');

    console.log("You chose: " + humanChoice);
    return humanChoice;
}

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);

    console.log("Computer chose: " + choices[randomNumber]);
    return choices[randomNumber];
}

const determineWinner = (humanChoice, computerChoice ) => {
    let result;
    humanChoice = humanChoice.toLowerCase();


    // logic
    // tie
    if (humanChoice === computerChoice) {
        result = 0;
    }
    else if(humanChoice == "rock") { // if humanChoice is rock
        if (computerChoice == "scissors") {
            result = 1;
        }
        else {
            result = 2;
        }
    }
    else if(humanChoice == "paper") { // if humanChoice is paper
        if (computerChoice == "rock") {
            result = 1;
        }
        else {
            result = 2;
        }
    }
    else{// if humanChoice is scissors
        if (computerChoice == "pepper") {
            result = 1;
        }
        else {
            result = 2;
        }
    }

    // return  0 - tie, 1 - human, 2 - computer
    return result;
}

const displayWinner = (result) => { 
    if (result == 0) {
        console.log("It's a tie!");
    }
    else if (result == 1) {
        console.log("You win!");
    }
    else {
        console.log("Computer wins!");
    }
}

const playRound = () => {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    const winner = determineWinner(humanChoice, computerChoice);

    displayWinner(winner);
}

playRound();

