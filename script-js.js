

// const calcButtons = document.getElementById("buttons");


// The following code is meant to display buttons on a calculator
// The idea is to create a set of dynamically created divs that 
// are contained within the calculator parent container





const add = function(a, b) {
	let sum = a + b; 
    return sum;
};

const subtract = function(a, b) {
  let result = b - a;
  return result;
};

const sum = function(arr) {
    let sum = arr.reduce((a, b) => a + b, 0);
    return sum;
};

const multiply = function(arr) {
  let product = arr.reduce((a, b) => a * b);
  return product;
};


