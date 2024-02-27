const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 14;
const MONSTER_ATTACK_VALUE = 12;
const HEAL_VALUE = 20;
const battleLog = [];
const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "STRONG_ATTACK";
const LOG_EVENT_PLAYER_ATTACK = "PLAYER_ATTACK";
const LOG_EVENT_PLAYER_STRONG_ATTACK = "PLAYER_STRONG_ATTACK";
const LOG_EVENT_MONSTER_ATTACK = "MONSTER_ATTACK";
const LOG_EVENT_PLAYER_HEAL = "PLAYER_HEAL";
const LOG_EVENT_GAME_OVER = "GAME_OVER";




function getMaxLifeValues(){
    const userEntrdValue = prompt("Enter the max value of the player's and Monster's health", '100');
    let parsedValue  = parseInt(userEntrdValue);
    
    if(isNaN(parsedValue) || parsedValue <= 0){
        throw{message: 'Invalid user input, not a number!'};
    }
    return parsedValue;
}

let chosenMaxLife;
try{
    chosenMaxLife = getMaxLifeValues();
}catch(error){
    console.log(error);
    chosenMaxLife = 100;
}

adjustHealthBars(chosenMaxLife);

let currentMonsterhealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

function writeToLog(ev ,val, MonsterHealth , PlayerHealth){
    let logEntry;
    if(ev === LOG_EVENT_PLAYER_ATTACK){
        logEntry = {
            event : ev,
            value : val,
            target : 'MONSTER',
            finalMonsterHealth : MonsterHealth,
            finalPlayerHealth : PlayerHealth
        }
    }else if(ev === LOG_EVENT_PLAYER_STRONG_ATTACK){
        logEntry = {
            event : ev,
            value : val,
            target : 'MONSTER',
            finalMonsterHealth : MonsterHealth,
            finalPlayerHealth : PlayerHealth
        }
        
    }else if(ev === LOG_EVENT_MONSTER_ATTACK){
        logEntry = {
            event : ev,
            value : val,
            target : 'PLAYER',
            finalMonsterHealth : MonsterHealth,
            finalPlayerHealth : PlayerHealth
        }
       
    }else if(ev === LOG_EVENT_PLAYER_HEAL){
        logEntry = {
            event : ev,
            value : val,
            target : 'PLAYER',
            finalMonsterHealth : MonsterHealth,
            finalPlayerHealth : PlayerHealth
        }
       
    }else if(ev === LOG_EVENT_GAME_OVER){
        logEntry = {
            event : ev,
            value : val,
            finalMonsterHealth : MonsterHealth,
            finalPlayerHealth : PlayerHealth
        }
       
    }
    battleLog.push(logEntry);

}
function reset(){
    currentMonsterhealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}
function endRound(){
    const initialHealth = currentPlayerHealth;
    const PlayerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= PlayerDamage;
    writeToLog(
        LOG_EVENT_MONSTER_ATTACK, 
        PlayerDamage, 
        currentMonsterhealth, 
        currentPlayerHealth
        );

    // utilizing the bonus life before the player dies!
    if(currentPlayerHealth <= 0 && hasBonusLife){
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialHealth;
        setPlayerHealth(initialHealth);
        alert('You would have been dead but thanks the bonus life you are saved');
    }

    if (currentMonsterhealth <= 0 && currentPlayerHealth > 0){
        alert('You won!');
        writeToLog(LOG_EVENT_GAME_OVER, 'PLAYER_WON' , currentMonsterhealth, currentPlayerHealth);
        reset();
    }else if(currentPlayerHealth <= 0 && currentMonsterhealth > 0){
        alert('You have been damaged by the wrath of the Monster!');
        writeToLog(LOG_EVENT_GAME_OVER, 'MONSTER_WON' , currentMonsterhealth, currentPlayerHealth);
        reset();
    }else if(currentMonsterhealth <=0 && currentPlayerHealth <= 0){
        alert('Voila! you have a draw!');
        writeToLog(LOG_EVENT_GAME_OVER, 'DRAW' , currentMonsterhealth, currentPlayerHealth);
        reset();

    }
}

function attackMonster(attackMode){
    let maxDamage;
    let logEvent;
    if(attackMode === MODE_ATTACK){
        maxDamage =  ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_ATTACK;
    }else if(attackMode === MODE_STRONG_ATTACK){
        maxDamage =  STRONG_ATTACK_VALUE;
        logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    }
    
    const Monsterdamage = dealMonsterDamage(maxDamage);
    currentMonsterhealth -= Monsterdamage;
    writeToLog(
        logEvent,
        Monsterdamage,
        currentMonsterhealth,
        currentPlayerHealth
        );

    endRound();
    
}

function attackHandler(){
    attackMonster(MODE_ATTACK);
}

function strongAttackHandler(){
    attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler(){
    let healValue;
    if(currentPlayerHealth >= chosenMaxLife - HEAL_VALUE){
        alert("You cannot replenish your health while being high on health!")
    }else{
        healValue = HEAL_VALUE;
    }
    increasePlayerHealth(healValue); //handles the UI
    currentPlayerHealth += healValue;
    writeToLog(
        LOG_EVENT_PLAYER_HEAL,
        healValue,
        currentMonsterhealth,
        currentPlayerHealth,
        );
    endRound();

}
function printLogHandler(){
    console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);

