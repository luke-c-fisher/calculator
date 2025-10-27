
// The following code is meant to display buttons on a calculator
// The idea is to create a set of dynamically created divs that 
// are contained within the calculator parent container

const display = document.querySelector(".display");
const keys = document.querySelectorAll(".keys");
const operators = document.querySelectorAll(".operator");
const equals = document.getElementById("equal");
const clear = document.getElementById("clear");


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


const result = document.createElement("div");

function updateDisplay(){

  if (evaluate == ""){
    result.textContent = `${firstNum}${opp}${secondNum}`;
  } else {
    result.textContent = evaluate;
    firstNum = evaluate;
    secondNum = "";
    opp = "";

    // if (firstNum == evaluate){
    //   secondNum = '';
    //   secondNum += e.target.textContent;
    //   console.log(secondNum);
    // }
    // if (firstNum == evaluate){
    //   opp = "";
    //   opp += e.target.textContent;
    //   console.log(opp);
    // }
   }
  
   clear.addEventListener("click", function(){
    display.textContent = "";
    firstNum = "";
    secondNum = "";
    opp = ""; 
    evaluate = "";
    });

   display.appendChild(result);
};


keys.forEach(key => {
  key.addEventListener("click", function(e){

    if (opp == ""){
      firstNum += e.target.textContent;
    } else {
      secondNum += e.target.textContent;
    }
    
    // if (firstNum == evaluate){
    //   secondNum = '';
    //   secondNum += e.target.textContent;
    //   console.log(secondNum);
    // }
    updateDisplay();
  });
});

operators.forEach(op => {
  op.addEventListener("click", function(e){
    opp += e.target.textContent;

    // if (firstNum == evaluate){
    //   opp = "";
    //   opp += e.target.textContent;
    //   console.log(opp);
    // }
    updateDisplay();
  });
});

equals.addEventListener("click", function(){

  let numOne = parseInt(firstNum);
  let numTwo = parseInt(secondNum);
  
  evaluate = operate(opp, numOne, numTwo);

  updateDisplay();
});

