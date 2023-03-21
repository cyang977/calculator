const grid = document.querySelector('.button-area');
const numArray = [];
testing();

/*function testing(){
    const word = '345+678'
    const arrays = word.split('+');
    console.log(arrays);
    console.log(arrays[0]);
    console.log(arrays[1]); 
}*/

function addOperands(a, b) {
    return a + b;
}

function subtractOperands(a, b) {
    return a - b;
}

function multiplyOperands(a, b) {
    return a * b;
}

function divideOperands(a, b) {
    return a / b;
}

function operate(expression) {
    let currentNum;
    if (/[\+]/.test(expression)) {
        currentNum = expression.split('+');
        numArray.push(currentNum[0]);
        numArray.push(currentNum[1]);
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



/*createButtons();


function createButtons() {
    for (i = 1; i <= 16; i++){
        let button = document.createElement('button');
        button.classList.add('button', `num-${i}`);
        grid.appendChild(button);
    }
    
}*/ 