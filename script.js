// HTML -> JS wiring up
const display = document.querySelector(".display");
const buttons = document.querySelector(".buttons");

// Variables for each of the parts of a calculator operation
let numValue1 = null;
let operator = null;
let numValue2 = null;
let currentDisplayValue = "";
let result = null;
let decimalAllowed = true;

buttons.addEventListener("click", (event) => {
  let target = event.target;

  if (target.classList.contains("decimal")) {
    if (decimalAllowed === true) {
      currentDisplayValue += target.textContent;
      display.textContent = currentDisplayValue;
      decimalAllowed = false;
    }
  }

  if (target.classList.contains("number")) {
    // if we click on number
    if (currentDisplayValue.length <= 6) {
      // cannot add more than 7 figures number
      currentDisplayValue += target.textContent; // adding the numbers to the variable CDV
      display.textContent = currentDisplayValue; // in display part of calculator we see what is inside CDV
    }
  }
  if (target.classList.contains("operator")) {
    // if we click on operator
    decimalAllowed = true; // allow the decimal points
    if (numValue1 !== null && currentDisplayValue !== "") {
      // if we have already have first number and the user has entered a new number after the previous operation then do following
      numValue2 = parseFloat(currentDisplayValue); // number that we have written give to the numValue2 variable
      result = operate(operator, numValue1, numValue2); // make a calculation and give it to the result variable
      numValue1 = result; // give a value of result to the numValue2
      currentDisplayValue = ""; // delete what is in CDV variable
      display.textContent = result.toString(); // make a result a string and display it in display
    } else numValue1 = parseFloat(currentDisplayValue); // if we have not any first number, do following - number that we have written give to the numValue1 variable
    operator = target.textContent; // remember the operator that we used
    currentDisplayValue = ""; // delete what is in CDV variable
  }
  if (target.classList.contains("clear")) {
    currentDisplayValue = "";
    numValue1 = null;
    numValue2 = null;
    operator = null;
    display.textContent = "0";
  }
  if (target.classList.contains("equals")) {
    // if we click on equals
    if (currentDisplayValue === "") {
      // no new number was entered
      numValue2 = parseFloat(numValue1); // getting the value from numValue1 to numValue2
    } else {
      numValue2 = parseFloat(currentDisplayValue); // else keep going with number that was entered
    }
    result = operate(operator, numValue1, numValue2);
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
