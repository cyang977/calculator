// Created global variables to hold values that will be used later on in the program
// These variables are datatype arrays
const numArray = [];
const previousNum = [];
const displayArrayValues = [];
const displayMsgTwo = document.querySelector('.displayMsg-two');
const displayMsgOne = document.querySelector('.displayMsg-one');
const buttons = document.querySelectorAll('.click');
const buttonsOperators = document.querySelectorAll('.operators');

// Adding functionality to operator buttons
buttonsOperators.forEach(button => button.addEventListener('click', () => {
    button.classList.add('yellow');
    displayInput(button);
}))

// Causes the bg-color to revert back to original based on trasition end
buttonsOperators.forEach(button => button.addEventListener('transitionend', () => {
    button.classList.remove('yellow');
}))

// Adding event listeners to all 'click' class html elements
// Once clicked, input's values will be added to an array using displayInput() func.
buttons.forEach(button => button.addEventListener('click', () => {
    console.log(button.textContent);
    button.classList.add('changeButtonColor');
    displayInput(button);
}));

// Causes the bg-color to revert back to original based on trasition end
buttons.forEach(button => button.addEventListener('transitionend', () =>{
    button.classList.remove('changeButtonColor');
}))

// Setting the 'click' event to run the 'operate' function
// This will take in an string expression of what is being displayed   
const operateButton = document.querySelector('.operate');
operateButton.addEventListener('click', () => {
    operateButton.classList.add('lightred');
    console.log(displayMsgTwo.textContent);
    operate(displayMsgTwo.textContent);
});

// Causes the bg-color to revert back to original based on trasition end
operateButton.addEventListener('transitionend', () => {
    operateButton.classList.remove('lightred');
})

// Once this button is clicked, will clear out displays
// It sets the array length to 0 and the textContents of both displays to "".
const acButton = document.querySelector('.ac') 
acButton.addEventListener('click', () => {
    acButton.classList.add('blue');
    displayArrayValues.length = 0;
    displayMsgOne.textContent = '';
    displayMsgTwo.textContent = '';
})

acButton.addEventListener('transitionend', () => {
    acButton.classList.remove('blue')
})


//testing();

/*function testing(){
    const word = '345+678'
    const arrays = word.split('+');
    console.log(arrays);
    console.log(arrays[0]);
    console.log(arrays[1]); 
}*/

// clears the array for previousNum also updating it. '+' the two numbers together
function addOperands(a, b) {
    const operandOne = Number(a);
    const operandTwo = Number(b);
    previousNum.length = 0;
    const total = operandOne + operandTwo;
    previousNum.push(total);
    numArray.length = 0;
    displayMsgOne.textContent = `${total}`;
    displayMsgTwo.textContent = `${total}`;
}

// clears the array for previousNum also updating it. '-' the two numbers together
function subtractOperands(a, b) {
    const operandOne = Number(a);
    const operandTwo = Number(b);
    previousNum.length = 0;
    const total = operandOne - operandTwo;
    previousNum.push(total);
    numArray.length = 0;
    displayMsgOne.textContent = `${total}`;
    displayMsgTwo.textContent = `${total}`;
}

// Clears the array for previousNum also updating it. '*' the two numbers together
function multiplyOperands(a, b) {
    const operandOne = Number(a);
    const operandTwo = Number(b);
    previousNum.length = 0;
    const total = operandOne * operandTwo;
    previousNum.push(total);
    numArray.length = 0;
    displayMsgOne.textContent = `${total}`;
    displayMsgTwo.textContent = `${total}`;
}

// Clears the array for previousNum also updating it. '/' the two numbers together
function divideOperands(a, b) {
    const operandOne = Number(a);
    const operandTwo = Number(b);
    previousNum.length = 0;
    const total = operandOne / operandTwo;
    previousNum.push(total);
    numArray.length = 0;
    displayMsgOne.textContent = `${total}`;
    displayMsgTwo.textContent = `${total}`;
}

// Used to find if the string expression contains a certain special character
// Depending on that character, a specific 'if' statement will run
function operate(expression) {
    // Lets us reset the display box to empty after '=' has been clicked
    displayArrayValues.length = 0;
    let currentNum;
    if (/[\+]/.test(expression)) {
        currentNum = expression.split('+');
        // By pushing values into this array, we can then use the values as arguments
        // These arguments will be used for the calculator funcs
        numArray.push(currentNum[0]);
        numArray.push(currentNum[1]);
        console.log(numArray);
        // We are clearing the array in currentNum.
        // That way it will only contain current split array of the new expression
        currentNum.length = 0;
        addOperands(numArray[0], numArray[1]);
    } else if (/[\-]/.test(expression)) {
        currentNum = expression.split('-');
        numArray.push(currentNum[0]);
        numArray.push(currentNum[1]);
        currentNum.length = 0;
        subtractOperands(numArray[0], numArray[1]);
    } else if (/[\*]/.test(expression)) {
        currentNum = expression.split('*');
        numArray.push(currentNum[0]);
        numArray.push(currentNum[1]);
        currentNum.length = 0;
        multiplyOperands(numArray[0], numArray[1]);
    } else if (/[\/]/.test(expression)) {
        currentNum = expression.split('/');
        numArray.push(currentNum[0]);
        numArray.push(currentNum[1]);
        currentNum.length = 0;
        divideOperands(numArray[0], numArray[1]);
    }
}

// Adding 'value' arguement into an array, then run next function
// Uses array as the argument for next function
function displayInput(value) {
    const text = value.textContent
    //value.classList.remove('changeButtonColor');
    displayArrayValues.push(text);
    displayNums(displayArrayValues);
}

// Takes an array as an arguement and 'joins' it together to from a string
// Then uses that joined array's string to be displayed with DOM manipulation
function displayNums(value) {
    let disVal = value.join('');
    console.log(disVal);
    displayMsgTwo.textContent = `${disVal}`;
}

