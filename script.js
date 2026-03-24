let currentValue = '0';
let operator = '';
let previousValue = '';
let resetDisplay = false;

function clearDisplay() {
    currentValue = '0';
    operator = '';
    previousValue = '';
    resetDisplay = false;
    updateDisplay();
}

function appendNumber(number) {
    if (resetDisplay) {
        currentValue = number;
        resetDisplay = false;
    } else {
        currentValue = currentValue === '0' ? number : currentValue + number;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (operator && !resetDisplay) {
        calculate();
    }
    previousValue = currentValue;
    operator = op;
    resetDisplay = true;
}

function calculate() {
    let result;
    const prev = parseFloat(previousValue);
    const curr = parseFloat(currentValue);
    
    switch (operator) {
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
            result = prev / curr;
            break;
        case '%':
            result = prev % curr;
            break;
        default:
            return;
    }
    
    currentValue = result.toString();
    operator = '';
    previousValue = '';
    resetDisplay = true;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').textContent = currentValue;
}