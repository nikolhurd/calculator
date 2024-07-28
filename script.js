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
    if (numValue1 !== null && currentDisplayValue !== "") {
      result = operate(operator, numValue1, numValue2);
      numValue1 = null;
      currentDisplayValue = "";
      display.textContent = result.toString();
    }
  }
  if (target.classList.contains("clear")) {
    currentDisplayValue = "";
    numValue1 = undefined;
    numValue2 = undefined;
    operator = undefined;
    display.textContent = "0";
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

const divide = (a, b) =>
  b === 0 ? (display.textContent = "dont be ridiculous") : a / b;

// Operator Function
const operate = (operator, a, b) => {
  if (operator === "+") return add(a, b);
  if (operator === "-") return subtract(a, b);
  if (operator === "*") return multiply(a, b);
  if (operator === "/") return divide(a, b);
};
