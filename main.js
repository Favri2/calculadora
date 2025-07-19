import { evaluateExpression } from './calculator.js';

const display = document.getElementById("display");

window.append = function(value) {
  if (display.value === "0" || display.value === "Error") {
    display.value = value;
  } else {
    display.value += value;
  }
};

window.clearDisplay = function() {
  display.value = "0";
};

window.deleteLast = function() {
  if (display.value.length > 1) {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = "0";
  }
};

window.calculate = function() {
  display.value = evaluateExpression(display.value);
};
