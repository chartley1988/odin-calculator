input = ["0"] // Length should never be negative, or exceed 3.

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
        button.addEventListener('click', computeInput)
        button.addEventListener('touchend', computeInput)
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


function resetCalculator() {
    input = ["0"]
    updateDisplay();
}


function generateDisplayText(textArray) {
    console.log(input);
    let newString = input[0];
    newString = textArray.join(' ');
    console.log(newString);
    return(newString)
}


function updateDisplay() {
    const displayValue = document.getElementsByClassName('display')[0];
    displayValue.textContent = generateDisplayText(input);
}


function computeInput(event){
    let buttonString = event.target.textContent;
    switch(buttonString){
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            appendNumber(buttonString);
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            appendOperator(buttonString);
            break;
        case "Reset": 
            resetCalculator();
            break;
        case "Del":;
        case "M":;
    }
}


function appendNumber(number){
    if (input.length < 2){
        input[0] = [];
        input[0].push(number);
        updateDisplay();
        return
    } else if (input.length >= 2){
        input[2] = [];
        input[2].push(number);
        updateDisplay();
        return
    }
}


function appendOperator(operator){
    if (input.length === 1) {
        input[1] = operator;
        updateDisplay(input);
    }
}


function add(num1, num2) {
    return(num1 + num2);
}


function subtract(num1, num2) {
    return(num1 - num2);
}


function multiply(num1, num2) {
    return(num1 * num2);
}


function divide(num1, num2) {
    return(num1 / num2);
}


function convertToNumber(string) {
    parseFloat(string)
}


function convertToString(number) {
    let newString = String(number);
    return newString
}