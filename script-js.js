

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

const multiply = function(a, b) {
  let product = a * b;
  return product;
};

const divide = function() {
  let quotient = b / a;
  return quotient;
}


function operate(opp, a, b) {
  if (opp === +){
    return add(a,b);
  }
}

console.log(operate(+, 2, 5));

