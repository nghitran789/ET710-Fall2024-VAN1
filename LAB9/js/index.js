let currentNumber = '';
let previousNumber = '';
let operation = null;

const previousNumberElement = document.getElementById('previous-number');
const currentNumberElement = document.getElementById('current-number');
const operationElement = document.getElementById('operation');

function calculateResult() {
    if (previousNumber === '' || currentNumber === '' || operation === null) {
        return;
    }

    let result;
    const prev = parseFloat(previousNumber);
    const curr = parseFloat(currentNumber);

    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = curr !== 0 ? prev / curr : 'Error';
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    previousNumber = '';
    operation = null;
    updateDisplay();
}

function appendNumber(number) {
    currentNumber += number.toString();
    updateDisplay();
}

function setOperation(op) {
    if (currentNumber === '') {
        return;
    }

    if (previousNumber !== '') {
        calculateResult();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = '';
    updateDisplay();
}

function clearCalculator() {
    currentNumber = '';
    previousNumber = '';
    operation = null;
    updateDisplay();
}

function updateDisplay() {
    previousNumberElement.textContent = previousNumber;
    currentNumberElement.textContent = currentNumber || '0';
    operationElement.textContent = operation || '';
}