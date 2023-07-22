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