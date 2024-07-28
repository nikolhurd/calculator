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

  if (target.classList.contains("operand")) {
    currentDisplayValue += target.textContent;
    display.textContent = currentDisplayValue;
  }
  if (target.classList.contains("operator")) {
    if (display.textContent !== "") {
      numValue1 = parseFloat(currentDisplayValue);
      operator = target.textContent;
      currentDisplayValue = "";
    }

    console.log(numValue1);
  }
  if (target.classList.contains("clear")) {
    currentDisplayValue = "";
  }
  if (target.classList.contains("equals")) {
    numValue2 = parseFloat(currentDisplayValue);
    console.log(numValue2);
    let result = operate(operator, numValue1, numValue2);
    console.log(result);
    display.textContent = result.toString();
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
