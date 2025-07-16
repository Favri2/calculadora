import { sumar, restar, multiplicar, dividir } from './calculator.js';

let display = document.getElementById('display');
let current = '';
let previous = '';
let operation = null;

window.appendNumber = function (num) {
  current += num;
  display.value = current;
};

window.setOperation = function (op) {
  if (current === '') return;
  if (previous !== '') calculate();
  operation = op;
  previous = current;
  current = '';
};

window.clearDisplay = function () {
  current = '';
  previous = '';
  operation = null;
  display.value = '';
};

window.calculate = function () {
  let result;
  const a = parseFloat(previous);
  const b = parseFloat(current);
  if (isNaN(a) || isNaN(b)) return;
  switch (operation) {
    case '+': result = sumar(a, b); break;
    case '-': result = restar(a, b); break;
    case '*': result = multiplicar(a, b); break;
    case '/': result = dividir(a, b); break;
    default: return;
  }
  current = result.toString();
  operation = null;
  previous = '';
  display.value = current;
};
