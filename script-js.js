
// The following code is meant to display buttons on a calculator
// The idea is to create a set of dynamically created divs that 
// are contained within the calculator parent container

const display = document.querySelector(".display");
const keys = document.querySelectorAll(".keys");
const equals = document.getElementById("equal");



const add = function(a, b) {
	let sum = a + b; 
    return sum;
};

const subtract = function(a, b) {
  let nums = b - a;
  return nums;
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
// Effectively, the second number can only be accessed once an operator is called. I need to create some kind of conditional 
// to help me do this.

// So far, I have the first and second number as global variables, called upon within the event listener. They simply append the 
// values entered in the calculator. These are the main issues I am running into 
// 1. How to fit the operator within the function, and is an operator variable necessary?
// 2. What is necessary to distinguish between the first and second number?

let firstNum = "";
let secondNum = "";
let opp = ""; 


keys.forEach(key => {
  key.addEventListener("click", function(e){
    const nums = document.createElement("div");

    firstNum += e.target.textContent;
    secondNum += e.target.textContent;

    nums.textContent = firstNum;
    nums.textContent = secondNum;

    display.appendChild(nums);
  });
});

equal.addEventListener("click", function(e){
  

})











// The next step is to create a dynamically created display bar

