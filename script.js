let number1 = undefined;
let number2 = undefined;
let operation = undefined;

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
            if(operation === undefined) {
                if(number1 !== undefined) {
                    let number1String = convertToString(number1);
                    number1String= number1String + buttonString;
                    console.log(number1String);
                    number1 = convertToNumber(number1String);
                } else {
                    number1 = (buttonString);
                }
                updateDisplay(number1);
                return
            } else {
                if(number2 !== undefined) {
                    let number2String = convertToString(number2);
                    number2String= number2String + buttonString;
                    console.log(number2String);
                    number2 = convertToNumber(number2String);
                } else {
                    number2 = (buttonString);
                }
                updateDisplay(number2);
                return
            }
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            updateDisplay(buttonString);
            operation = buttonString;
            break;
        case "Reset": 
            resetCalculator();
            break;
        case "Del":;
        case "M":;
        case "=": operate(operation, number1, number2);
    }
}
   

function operate(operator, num1, num2) { 
    switch(operator){
        case "+": 
            number1 = add(num1, num2);
            updateDisplay(number1);
            operation = undefined;
            number2 = undefined;
            return;
        case "-": 
            number1 = subtract(num1, num2);
            operation = undefined;
            number2 = undefined;
            return;
        case "*": 
            number1 = multiply(num1, num2);
            updateDisplay(number1);
            number1 = number2;
            operation = undefined;
            number2 = undefined;
            return;
        case "/": 
            number1 = divide(num1, num2);
            updateDisplay(number1);
            operation = undefined;
            number2 = undefined;
            return;
        default: 
            updateDisplay(num1);
    }
}


function resetCalculator() {
    console.table(number1,number2);
    updateDisplay(0);
    number1 = undefined;
    number2 = undefined;
    operation = undefined;
    console.table(number1,number2);
}


function updateDisplay(text) {
    const displayValue = document.getElementsByClassName('display')[0];
    displayValue.textContent = text;
}


function add(num1, num2) {
    return(convertToNumber(num1) + convertToNumber(num2));
}


function subtract(num1, num2) {
    return(convertToNumber(num1) - convertToNumber(num2));
}


function multiply(num1, num2) {
    return(convertToNumber(num1) * convertToNumber(num2));
}


function divide(num1, num2) {
    return(convertToNumber(num1) / convertToNumber(num2));
}


function convertToNumber(string) {
   return(parseFloat(string));
}


function convertToString(number) {
    let newString = number.toString();
    //console.table(number, newString);
    return(newString);
}