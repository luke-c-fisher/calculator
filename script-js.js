const calculator = document.querySelector(".container");

// const calcButtons = document.getElementById("buttons");

size = 9;

// The following code is meant to display buttons on a calculator
// The idea is to create a set of dynamically created divs that 
// are contained within the calculator parent container

for (let i = 0; i <= size; i++){
    const nums = document.createElement("button");
    nums.textContent = i;

    nums.addEventListener("click", function(e){
        e.target.style.backgroundColor = "dodgerblue";
    });
    
    calculator.appendChild(nums);
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


