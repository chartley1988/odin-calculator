// To Do:
//  - Limit characters so they fit on the screen.
//  - Make the del key
//  - Make the memory key.




let equation = []; // This represents ["number1", "operation" "number2"]


connectButtons();


function getButtons() { 
    const interface = document.getElementsByClassName('interface')[0];
    let buttons = Array.from(interface.children);
    buttons.shift(); // Removes the answer display from button list
    return buttons; 
}


function connectButtons() {
    let buttons = getButtons();
    buttons.forEach(button => {
        button.addEventListener('click', computeInput)
        button.addEventListener('touchstart', computeInput)
    })
}


function computeInput(event){
    let buttonString = event.target.textContent;
    switch(buttonString){
        case "0":case "1":case "2":case "3":case "4":case "5":
        case "6":case "7":case "8":case "9":case ".":
            switch(equation.length){
                case 0:
                    equation[0] = (buttonString);
                    updateDisplay(buttonString);
                    console.table("Length: 0", equation);
                    return;
                case 1:
                    equation[0] = addCharacter(equation[0], buttonString)
                    updateDisplay(equation[0]);
                    console.table("Length: 1", equation);
                    return;
                case 2:
                    equation[2] = buttonString;
                    updateDisplay(buttonString);
                    console.table("Length: 2", equation);
                    return;
                case 3:
                    equation[2] = addCharacter(equation[2], buttonString)
                    updateDisplay(equation[2]);
                    console.table("Length: 3", equation);
                    return; 
            }       

        case "+": case "-": case "*": case "/":
            switch(equation.length) {
                case 0:
                    console.table("Length: 0", equation)
                    return;
                case 1:
                    equation[1] = buttonString;
                    updateDisplay(buttonString);
                    console.table("Length: 1", equation)
                    return;
                case 2:
                    equation[1] = buttonString;
                    updateDisplay(buttonString);
                    console.table("Length: 2", equation)
                    return;;
                case 3:
                    operate(equation[1], equation[0], equation[2]);
                    equation[1] = buttonString;
                    updateDisplay(equation[0]);
                    return;
            }
        case "Reset": 
            resetCalculator();
            break;
        case "Del":;
        case "M":;
        case "=": operate(equation[1], equation[0], equation[2]);
    }
}


function addCharacter(num, character) { // num1 refers to number1 or number2, character is a number or decimal
    numberString= num + character;
    return (numberString);
}


function operate(operator, num1, num2) { 
    switch(operator){
        case "+": 
            equation[0] = add(num1, num2);
            updateDisplay(equation[0]);
            equation.length = 1;
            return;
        case "-": 
            equation[0] = subtract(num1, num2);
            updateDisplay(equation[0]);
            equation.length = 1;
            return;
        case "*": 
        equation[0] = multiply(num1, num2);
            updateDisplay(equation[0]);
            equation.length = 1;
            return;
        case "/": 
            equation[0] = divide(num1, num2);
            updateDisplay(equation[0]);
            equation.length = 1;
            return;
        default: 
            updateDisplay(num1);
    }
}


function resetCalculator() {
    console.table(equation);
    updateDisplay(0);
    equation = [];
    console.table(equation);
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

