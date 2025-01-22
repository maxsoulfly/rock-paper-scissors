console.log("Hi There!");

/* 
    Rock, Paper, Scissors
    - User makes a choice
    - Computer makes a choice
    - Compare choices
    - Determine winner
    - Display winner
*/

/**
 * getHumanChoice
 * 
 * - Prompts user to enter their choice
 * - Validates user input
 * - Returns user input
 * 
 * @returns {string} humanChoice
 */ 
const getHumanChoice = () => {
    let humanChoice = prompt('Rock, Paper, or Scissors?');

    // validate humanChoice
    switch(humanChoice.toLowerCase()) {
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

/**
 * getComputerChoice
 * 
 * - Generates a random number
 * - Assigns a choice based on the random number
 * - Returns the computer choice
 *  
 * @returns {string} computerChoice
 * */
const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);

    console.log("Computer chose: " + choices[randomNumber]);
    return choices[randomNumber];
}


/**
 * determineWinner
 * 
 * - Determines the winner of the game
 * - Returns the result
 * 
 * @param {string} humanChoice 
 * @param {string} computerChoice 
 * @returns 
 */
const determineWinner = (humanChoice, computerChoice ) => {
    let result;
    humanChoice = humanChoice.toLowerCase();


    // logic to determine winner

    // if humanChoice is the same as computerChoice, it's a tie
    if (humanChoice === computerChoice) {
        result = 0;
    }
    else if(humanChoice == "rock") { // if humanChoice is rock
        if (computerChoice == "scissors") result = 1; // human wins
        else result = 2; // computer wins
    }
    else if(humanChoice == "paper") { // if humanChoice is paper
        if (computerChoice == "rock") result = 1; // human wins
        else result = 2; // computer wins
    }
    else{// if humanChoice is scissors
        if (computerChoice == "paper") result = 1; // human wins
        else result = 2; // computer wins
    }

    // return  0 - tie, 1 - human, 2 - computer
    return result;
}

/**
 * displayWinner
 * 
 * - Displays the winner of the game
 * 
 * @param {int} result 
 */
const displayWinner = (result) => { 
    if (result == 0) console.log("It's a tie!");
    else if (result == 1) console.log("You win!");
    else console.log("Computer wins!");
}

/**
 * displayUltimateWinner
 * - Displays the ultimate winner of the game
 * 
 * @param {int} humanScore 
 * @param {int} computerScore 
 */
const displayUltimateWinner = (humanScore, computerScore) =>{
    if (humanScore > computerScore) console.log("You are the ultimate winner!");
    else console.log("Computer is the ultimate winner!");
}

/**
 * displayScore
 * - Displays the current score of the game
 * 
 * @param {int} humanScore 
 * @param {int} computerScore 
 */
const displayScore = (humanScore, computerScore) => {
    console.log("Human Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
}

/**
 * playRound
 * 
 * - Plays a round of the game
 * - Returns the winner of the round
 * -  0 - tie, 1 - human, 2 - computer
 * 
 * @returns {int} winner
 * 
 */
const playRound = () => {

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    const winner = determineWinner(humanChoice, computerChoice);

    return winner;
}

/**
 * playGame
 * 
 * - Plays the game until a player reaches 5 points
 * - Displays the ultimate winner of the game
 * - Displays the score of the game
 * 
 */
const playGame = () => {
    
    let humanScore = 0;
    let computerScore = 0;
    let winner;
    
    do{
        winner = playRound();
        if (winner == 1) humanScore++;
        else if (winner == 2) computerScore++;

        displayWinner(winner);
        displayScore(humanScore, computerScore);
    }while(humanScore < 5 && computerScore < 5);
    
    displayUltimateWinner(humanScore, computerScore);
    displayScore(humanScore, computerScore);
}

playGame();