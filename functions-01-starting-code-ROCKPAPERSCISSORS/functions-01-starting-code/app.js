const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_USER_CHOICE = ROCK; 
const RESULT_GAME_DRAW = 'DRAW';
const RESULT_PLAYER_WINS ="PLAYER_WINS";
const RESULT_COMPUTER_WINS ="COMPUTER_WINS";


let isGameActive = false;

const getUserInput = () => {
    const userSelection = prompt(`What do you choose? ${ROCK}, ${PAPER} OR ${SCISSORS} ? `).toUpperCase();

    if (userSelection !== ROCK &&
        userSelection !== PAPER &&
        userSelection !== SCISSORS){
            alert(`Invalid choice! We have seleted ${DEFAULT_USER_CHOICE} for you! `);
            return ;
        }
        return userSelection;
}

const getComputerChoice = () => {
    const randomVal =  Math.random();
    if(randomVal <= 0.34){
        return ROCK;
    }else if(randomVal < 0.67){
        return PAPER;
    }else{
        return SCISSORS;
    }
}
const getWinner = ( cChoice = DEFAULT_USER_CHOICE , pChoice) => {
    if(pChoice === cChoice){
        return RESULT_GAME_DRAW;
    }else if(pChoice === ROCK && cChoice === SCISSORS ||
             pChoice === SCISSORS && cChoice === PAPER ||
             pChoice === PAPER && cChoice === ROCK){
                return RESULT_PLAYER_WINS;
    }else{
                return RESULT_COMPUTER_WINS;
    }
}


startGameBtn.addEventListener('click', () => {
    if(isGameActive){
        return; //if the game's active it does not allow for a new game to start at the same time.
    } 
    isGameActive = true;
    console.log('Game is starting......');

    const playerChoice = getUserInput();
    const computerChoice =  getComputerChoice();
    let winner;
    if(playerChoice){
     winner = getWinner(computerChoice , playerChoice );
        
    }else{
        winner = getWinner(computerChoice , playerChoice);

    }
    
    let message = `The player chose : ${playerChoice || DEFAULT_USER_CHOICE} and the computer chose : ${computerChoice}, therefore,`;
    if(winner === RESULT_GAME_DRAW){
        message += ' you had a DRAW';
    }else if (winner === RESULT_COMPUTER_WINS){
        message += ' you LOST';
    }else{
        message += 'you WON'; 
    }
    
    alert(message);

});