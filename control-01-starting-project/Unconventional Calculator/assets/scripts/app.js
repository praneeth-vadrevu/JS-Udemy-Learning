const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// creates Calculation result
function createResult(calcType){
  const enteredNumber = getUserNumberInput();

  if (calcType !== "ADD" &&
      calcType !== "SUBTRACT" &&
      calcType !== "MULTIPLY" && 
      calcType !== "DIVIDE" ||
      enteredNumber === 0
      ){
        return;
      }
  const initialResult = currentResult;
  let mathOperator;

  if(calcType === 'ADD'){
    currentResult += enteredNumber;
    mathOperator = "+";
  }else if(calcType === 'SUBTRACT'){
    currentResult -= enteredNumber;
    mathOperator = "-";
  }else if(calcType === 'MULTIPLY'){
    currentResult *= enteredNumber;
    mathOperator = "*";
  }else if(calcType === 'DIVIDE'){
    currentResult /= enteredNumber;
    mathOperator = "/";
  }
  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calcType, initialResult, enteredNumber, currentResult);
}
// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}


function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  createResult('ADD');
}

function subtract() {
  createResult('SUBTRACT');
}

function multiply() {
  createResult('MULTIPLY');
}

function divide() {
  createResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
