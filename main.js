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

    const computerChoice = choices[randomNumber];
    const computerChoiceDisplay = document.querySelector('#computerChoice');
    computerChoiceDisplay.textContent = "Computer chose: " + computerChoice;

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
    // humanChoice = humanChoice.toLowerCase();


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
    const displayMessages = ["It's a tie!", "You win!", "Computer wins!"];
    const displayColors = ["blue", "green", "red"];

    // console.log(displayMessages[result]);
    const resultsDisplay = document.querySelector('#results');
    resultsDisplay.textContent = displayMessages[result];
    resultsDisplay.style.color = displayColors[result];

}

/**
 * displayUltimateWinner
 * - Displays the ultimate winner of the game
 * 
 * @param {int} humanScore 
 * @param {int} computerScore 
 */
const displayUltimateWinner = (humanScore, computerScore) =>{
    const ultimateWinnerTitle = createElement('h1', '', 'ultimateWinner');
    const display = document.querySelector('#container');
    const restartButton = createElement('button', 'Start Again!', '');
    restartButton.addEventListener('click', createUI);


    if (humanScore >= 5 || computerScore >= 5) {
        if (humanScore > computerScore) {
            ultimateWinnerTitle.textContent = "You are the Ultimate Winner!";
            ultimateWinnerTitle.style.color = "green";
        }
        else {
            ultimateWinnerTitle.textContent = "Computer is the Ultimate Winner!";
            ultimateWinnerTitle.style.color = "red";
        }

        // Display the final score and reset
            // TODO: create a modal
        display.innerHTML = '';
        display.appendChild(ultimateWinnerTitle);
        display.appendChild(restartButton);
    }
    
}

/**
 * displayScore
 * - Displays the current score of the game
 * 
 * @param {int} humanScore 
 * @param {int} computerScore 
 */
const displayScore = (humanScore, computerScore) => {

    const humanScoreDisplay = document.querySelector('#humanScore'); 
    const computerScoreDisplay = document.querySelector('#computerScore');

    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
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
const playRound = (humanChoice) => {
    const computerChoice = getComputerChoice();
    const winner = determineWinner(humanChoice, computerChoice);

    if (winner == 1) {
        humanScore++;
    }
    else if (winner == 2) {
        computerScore++;
    }

    displayWinner(winner);
    displayScore(humanScore, computerScore);

    // check if one of the players scored 5
    displayUltimateWinner(humanScore, computerScore)
}

/**
 * createUI
 * 
 * - Creates a user interface for the game
 * 
 */
const createUI = () => {
    const body = document.querySelector('body');

    body.innerHTML = '';
    humanScore = 0;
    computerScore = 0;

    // Create a container div
    const container = createElement('div', '', 'container');
    body.appendChild(container);

    // Create a header for the game
    const mainHeader = createElement('h1', "Rock, Paper, Scissors", '');
    container.appendChild(mainHeader);

    // Create Buttons for rock, paper, scissors
    const rockButton = createElement('button', 'Rock', 'rockButton');
    const paperButton = createElement('button', 'Paper', 'paperButton');
    const scissorsButton = createElement('button', 'Scissors', 'scissorsButton');

    rockButton.addEventListener('click', () => playRound('Rock'));
    paperButton.addEventListener('click', () => playRound('Paper'));
    scissorsButton.addEventListener('click', () => playRound('Scissors'));

    container.appendChild(rockButton);
    container.appendChild(paperButton);
    container.appendChild(scissorsButton);

    // Create a display area for the game results
    createDisplay();
};

/**
 * createDisplay
 * 
 * - Creates a display area for the game results
 */ 
const createDisplay = () => {
    const body = document.querySelector('body');

    // const display = createElement('div', '', 'display');
    const display = document.querySelector('#container');
    const header = createElement('h1', "Results: ", '');
    const results = createElement('h2', '', 'results');
    const computerChoice = createElement('h3', '', 'computerChoice');

    display.appendChild(header);
    display.appendChild(computerChoice);
    display.appendChild(results);
    
    const score = createElement('h1', "Score: ", '');
    const scoreText = createElement('ul', "", "scoreText");
    const humanScore = createElement('span', "0", "humanScore");
    const humanScoreText = createElement('span', "Human: ", "");
    const humanScoreLI = createElement('li', "", "humanScoreLI");
    const computerScore = createElement('span', "0", "computerScore");
    const computerScoreText = createElement('span', "Computer: ", "");
    const computerScoreLI = createElement('li', "", "computerScoreLI");

    humanScoreLI.appendChild(humanScoreText);
    humanScoreLI.appendChild(humanScore);

    computerScoreLI.appendChild(computerScoreText);
    computerScoreLI.appendChild(computerScore);

    scoreText.appendChild(humanScoreLI);
    scoreText.appendChild(computerScoreLI);

    display.appendChild(score);
    display.appendChild(scoreText);

    body.appendChild(display);
}

/**
 * createElement
 * 
 * - Creates an element with the specified text and id
 * 
 * @param {string} element 
 * @param {string} text 
 * @param {string} id 
 * 
 * @returns newElement
 */
const createElement = (element, text, id) => {
    const newElement = document.createElement(element);
    newElement.id = id;

    if (element === 'button') newElement.innerHTML = text;
    else newElement.textContent = text;
    
    return newElement;
}

/**
 * createButton
 * 
 * 
 * @param {*} text 
 * @param {*} id 
 */
const createButton = (text, id) => {

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
    createUI();
    
}

playGame();