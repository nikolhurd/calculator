// HTML -> JS wiring up
const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");

// Variables for each of the parts of a calculator operation
let numValue1;
let operator;
let numValue2;
let currentDisplayValue = "";

buttons.addEventListener("click", (event) => {
  let target = event.target;

  if (target.classList.contains("operator")) {
    console.log("Operator item was clicked");
  }
  if (target.classList.contains("operand")) {
    console.log("Operand item was clicked");
    currentDisplayValue += target.textContent;
    display.textContent = currentDisplayValue;
  }
  if (target.classList.contains("clear")) {
    console.log("Clear item was clicked");
  }
  if (target.classList.contains("equals")) {
    console.log("Equals item was clicked");
  }
});

// Basic Arithmetic Functions
const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => (b === 0 ? alert("Cannot divide by zero") : a / b);

// Operator Function
const operate = (operator, a, b) => {
  if (operator === "+") return add(a, b);
  if (operator === "-") return subtract(a, b);
  if (operator === "*") return multiply(a, b);
  if (operator === "/") return divide(a, b);
};
