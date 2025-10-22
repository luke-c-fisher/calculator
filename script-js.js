
// The following code is meant to display buttons on a calculator
// The idea is to create a set of dynamically created divs that 
// are contained within the calculator parent container

const display = document.querySelector(".display");
const keys = document.querySelectorAll(".keys");
const container = document.querySelector(".container");


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

function clearCalc(){
  document.querySelector(".display").innerHTML = ""
}

// We have to find a way to store a and b in the function below and use operate on them when the "=" button is called

keys.forEach(key => {
  key.addEventListener("click", function(){
    const equals = document.getElementById("equal");
    const entries = document.createElement("div"); 

    entries.textContent = this.textContent;

    display.appendChild(entries);
  });
});










// The next step is to create a dynamically created display bar

