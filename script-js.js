
// The following code is meant to display buttons on a calculator
// The idea is to create a set of dynamically created divs that 
// are contained within the calculator parent container

const entries = document.querySelector(".display");
const keys = document.querySelector(".keys");

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

const divide = function(a, b) {
  let quotient = b / a;
  return quotient;
}


function operate(opp, a, b) {
  switch(opp){
    case '+':
      return add(a,b);
      break;
    case '-':
      return subtract(a,b);
      break;
    case '*':
      return multiply(a,b);
      break;
    case '/':
      return divide(a,b);
      break;
  };
}

keys.addEventListener('click', function(){
  console.log(this.textContent);

  // entries.appendChild();
})





// The next step is to create a dynamically created display bar

