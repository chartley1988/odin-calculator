
connectButtons();

function getButtons() {
    const interface = document.getElementsByClassName('interface')[0];
    let buttons = Array.from(interface.children);
    buttons.shift();
    return buttons; // Removes the answer display from button list
}

function connectButtons() {
    let buttons = getButtons();
    buttons.forEach(button => {
        button.addEventListener('click', updateDisplay)
        button.addEventListener('touchend', updateDisplay)
    })
}
   
function operate(operator, num1, num2) { 
    switch(operator){
        case "+": 
            add(num1, num2);
        case "-": 
            subtract(num1, num2);
        case "*": 
            multiply(num1, num2);
        case "/": 
            divide(num1, num2);
        default: 
            return;
    }
}

function updateDisplay(text) {
    const displayValue = document.getElementsByClassName('display')[0];
    displayValue.textContent = text.target.textContent;
}

function add(num1, num2) {
    return(num1 + num2);
}

function subtract(num1, num2) {
    return(num1 - num2);
}

function multiply(num1, num2) {
    return(num1 - num2);
}

function divide(num1, num2) {
    return(num1 - num2);
}