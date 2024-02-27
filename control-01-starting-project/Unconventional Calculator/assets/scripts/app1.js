let defaultResult = 0;
let currResult = defaultResult;


function getUserNumberInput(){
    return parseInt(usrInput.value);
}
function createAndWriteOutput(prevResult , operation, calcNum){
    if(operation === 'ADD'){
        let currCalcDesc = `${prevResult} + ${calcNum}`;
        outputResult (currResult ,currCalcDesc);
    }
   


}

function add(){
    let enteredNumber =  getUserNumberInput();
    let initialResult =  currResult;
    currResult += enteredNumber;
    
    createAndWriteOutput(initialResult, 'ADD', enteredNumber);
   
}
function subtract(){
    let enteredNumber =  getUserNumberInput();
    let initialResult =  currResult;
    currResult -= enteredNumber;
    
    let operation = "SUBTRACT";
    let operator  = "-";
    let currCalcDesc = `${initialResult} ${operator} ${enteredNumber}`;
    outputResult(currResult,currCalcDesc );
    
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);

