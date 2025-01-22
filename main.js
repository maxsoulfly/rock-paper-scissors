console.log("Hi There!");

/* 
    Rock, Paper, Scissors
    - User makes a choice
    - Computer makes a choice
    - Compare choices
    - Determine winner
    - Display winner
*/


const getHumanChoice = () => {
    let humanChoice = prompt('Rock, Paper, or Scissors? Press q or quit to exit.');

    // validate humanChoice
    switch(humanChoice.toLowerCase()) {
        case 'quit':
        case 'q':
            humanChoice = 'quit';
            break;
        case 'rock':
        case 'r':
            humanChoice = 'rock';
            break;
        case 'paper':
        case 'p': 
            humanChoice = 'paper'; 
            break;
        case 'scissors':
        case 's':
            humanChoice = 'scissors'; 
            break;
        default:
            console.log("Invalid choice. Please choose Rock, Paper, or Scissors.");
            humanChoice = getHumanChoice();
    }

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
        if (computerChoice == "paper") {
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

const displayUltimateWinner = (humanScore, computerScore) =>{
    if (humanScore > computerScore) {
        console.log("You are the ultimate winner!");
    }
    else {
        console.log("Computer is the ultimate winner!");
    }
}

const displayScore = (humanScore, computerScore) => {
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

const playRound = () => {

    const humanChoice = getHumanChoice();
    if (humanChoice === 'quit') break;
    const computerChoice = getComputerChoice();

    const winner = determineWinner(humanChoice, computerChoice);

    return winner;
}

const playGame = () => {
    
    let humanScore = 0;
    let computerScore = 0;
    let winner;
    do{
        winner = playRound();
        if (winner == 1) {
            humanScore++;
        }
        else if (winner == 2) {
            computerScore++;
        }

        displayWinner(winner);
        displayScore(humanScore, computerScore);
    }while(humanScore < 5 && computerScore < 5);
    
    displayUltimateWinner(humanScore, computerScore);
    displayScore(humanScore, computerScore);
}

playGame();