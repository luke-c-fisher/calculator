const calculator = document.querySelector(".parent-div");

// const calcButtons = document.getElementById("buttons");

size = 18

for (let i = 0; i <= size; i++){
    const divs = document.createElement("div")
    
    calculator.appendChild(divs)
}




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


