let currentNumber = '';
let previousNumber = '';
let operation = null;

const previousNumberElement = document.getElementById('previous-number');
const currentNumberElement = document.getElementById('current-number');
const operationNumberElement = document.getElementById('operation');

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
}