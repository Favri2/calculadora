import { sumar, restar, multiplicar, dividir } from './calculator.js';

let display = document.getElementById("display");
let current = "";
let previous = "";
let operator = null;

window.append = function(num) {
  current += num;
  display.value = current;
};

window.setOp = function(op) {
  if (current === "") return;
  if (previous !== "") {
    calculate();
  }
  operator = op;
  previous = current;
  current = "";
};

window.clearDisplay = function() {
  current = "";
  previous = "";
  operator = null;
  display.value = "";
};

window.calculate = function() {
  if (operator === null || current === "" || previous === "") return;
  const a = parseFloat(previous);
  const b = parseFloat(current);
  let result;

  try {
    switch (operator) {
      case '+': result = sumar(a, b); break;
      case '-': result = restar(a, b); break;
      case '*': result = multiplicar(a, b); break;
      case '/': result = dividir(a, b); break;
    }
    current = result.toString();
    operator = null;
    previous = "";
    display.value = current;
  } catch (error) {
    display.value = "Error";
    current = "";
    previous = "";
    operator = null;
  }
};
