
const numArray = [];
const previousNum = [];
const displayArrayValues = [];
const displayMsgTwo = document.querySelector('.displayMsg-two');
const displayMsgOne = document.querySelector('.displayMsg-one');
const buttons = document.querySelectorAll('.click');
buttons.forEach(button => button.addEventListener('click', () => {
    console.log(button.textContent);
    displayInput(button.textContent);
}));
const operateButton = document.querySelector('.operate');
operateButton.addEventListener('click', () => {
    console.log(displayMsgTwo.textContent);
    operate(displayMsgTwo.textContent);
});

const acButton = document.querySelector('.ac') 
acButton.addEventListener('click', () => {
    displayArrayValues.length = 0;
    displayMsgOne.textContent = "";
    displayMsgTwo.textContent = "";
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

// clears the array for previousNum also updating it. '*' the two numbers together
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

// clears the array for previousNum also updating it. '/' the two numbers together
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

function operate(expression) {
    // lets us reset the display box to empty after '=' has been clicked
    displayArrayValues.length = 0;
    let currentNum;
    if (/[\+]/.test(expression)) {
        currentNum = expression.split('+');
        numArray.push(currentNum[0]);
        numArray.push(currentNum[1]);
        console.log(numArray);
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
    displayArrayValues.push(value);
    displayNums(displayArrayValues);
}

// Takes an array as an arguement and 'joins' it together to from a string
// Then uses that string to be displayed with DOM manipulation
function displayNums(value) {
    let disVal = value.join('');
    console.log(disVal);
    displayMsgTwo.textContent = `${disVal}`;
}



/*createButtons();


function createButtons() {
    for (i = 1; i <= 16; i++){
        let button = document.createElement('button');
        button.classList.add('button', `num-${i}`);
        grid.appendChild(button);
    }
    
}*/ 