
// The following code is meant to display buttons on a calculator
// The idea is to create a set of dynamically created divs that 
// are contained within the calculator parent container

const display = document.querySelector(".display");
const keys = document.querySelectorAll(".keys");
const operators = document.querySelectorAll(".operator");
const equals = document.getElementById("equal");
const clear = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");


const add = function(a, b) {
	let sum = a + b; 
    return sum;
};

const subtract = function(a, b) {
  let nums = a - b;
  return nums;
};

const multiply = function(a, b) {
  let product = a * b;
  return product;
};

const divide = function(a, b) {
  let quotient = a / b;
  return quotient;
}


function operate(opp, a, b) {
  switch(opp){
    case '+':
      return add(a,b);

    case '-':
      return subtract(a,b);

    case '*':
      return multiply(a,b);

    case '/':
      return divide(a,b);

  };
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
let evaluate = "";
let newOpp = "";

// I will approach the issue of stringing together operations using two methods:
// 1. creating a switch-case statement where I denote the logic for an additional operation and display it.
// 2. create a seperate function that has a similar logic to the first method.

const result = document.createElement("div");

function updateDisplay(){

  if (evaluate == ""){
    result.textContent = `${firstNum}${opp}${secondNum}`;
  } else {
    result.textContent = evaluate;
    firstNum = evaluate;
  }
  display.textContent = result.textContent;

  clear.addEventListener("click", function(){
    display.textContent = "";
    firstNum = "";
    secondNum = "";
    opp = ""; 
    evaluate = "";
  });
};


keys.forEach(key => {
  key.addEventListener("click", function(e){

    if (opp == ""){
      firstNum += e.target.textContent;
    } else {
      secondNum += e.target.textContent;
    }
    updateDisplay();
  });
});

// Right now, the calculator is able to automatically update 'evaluate' with the previous entry for numTwo (i.e., numOne + numTwo = evaluate =>
  // opp + numTwo) The operator is accumulating evaluate with each press of an operator, which we don't want. Instead, evaluate should only 
  // change with the equals sign. 

operators.forEach(op => {
  op.addEventListener("click", function(e){

    opp = e.target.textContent;
    updateDisplay();
  });
});

equals.addEventListener("click", function(){
  if (opp != "" && secondNum != ""){
    let numOne = parseInt(firstNum);
    let numTwo = parseInt(secondNum);
    evaluate = operate(opp, numOne, numTwo);
    secondNum = "";
    updateDisplay();
  }
});


