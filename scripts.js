window.addEventListener('load', function() {
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
    if (b === 0) {
      alert("Hey! You can't divide by zero!");
    }
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
  
  const calculator = document.querySelector(".calculator");
  const keys = calculator.querySelector(".buttons");
  
  keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
      const key = e.target;
      const action = key.dataset.action;
  
      if (!action) {
        console.log('number key!')
      }
  
      if (
        action === 'add' ||
        action === 'subtract' ||
        action === 'multiply' ||
        action === 'divide'
      ) {
        console.log('operator key!')
      }

      if (action === 'decimal') {
        console.log('decimal key!');
      }

      if (action === 'clear') {
        console.log('clear key!');
      }

      if (action === 'calculate') {
        console.log('equal key!')
      }

      if (action === 'backspace') {
        console.log('backspace key!');
      }

      if (action === 'negative') {
        console.log('plus minus key!');
      }
    }
  });
});