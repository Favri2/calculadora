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

window.calculate = function() {
  display.value = evaluateExpression(display.value);
};
window.deleteLast = function () {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
};
