const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
  let summedNums = 0;
	for (let i = 0; i < arr.length; i++) {
    summedNums += arr[i];
  }
  return summedNums;
};

const multiply = function(...arr) {
	let multiplyNums = 1;
	for (let i = 0; i < arr.length; i++) {
    multiplyNums *= arr[i];
  }
  return multiplyNums;
};

const divide = function(a,b){
  return a / b;

};

let firstNum;
let operator;
let secondNum;

function operate(firstNum, operator, secondNum) {
  if (operator === "+") {
    add(firstNum, secondNum);
  } else if (operator === "-") {
    subtract(firstNum, secondNum);
  } else if (operator === "*") {
    multiply(firstNum, secondNum);
  } else if (operator === "/") {
    divide(firstNum, secondNum);
  }
}