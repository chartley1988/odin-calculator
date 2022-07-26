const displayValue = document.getElementsByClassName('display')[0];
const interface = document.getElementsByClassName('interface')[0];
let buttons = Array.from(interface.children);
buttons.shift(); // Removes the answer display from button list

buttons.forEach(button => {
    button.addEventListener('click', event => {
        console.log(event.target.textContent);
        reset(event.target.textContent);
    })
})
   



function operate(operator, num1, num2) { 
    console.log("Temp")
}

function reset(text) {
    displayValue.textContent = text;
}

function add() {
    //
}

function subtract() {
    //
}

function multiply() {
    //
}

function divide() {

}