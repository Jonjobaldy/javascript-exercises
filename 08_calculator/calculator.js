const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce(sumArray, 0);

  function sumArray(accumulator, element){
    return accumulator + element;
  }
};

const multiply = function(array) {
  return array.reduce(multiplyArray);

  function multiplyArray(accumulator, element){
    return accumulator * element;
  }
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
	if (a === 0){
    return 1;
  } 
  let answer = 1;
  for (let i = a; i > 0; i--){
    answer *= i;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
