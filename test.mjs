import assert from 'node:assert/strict';
import { evaluateExpression } from './calculator.js';

console.log("Iniciando pruebas de la calculadora...");

assert.equal(evaluateExpression("2+3"), 5);
assert.equal(evaluateExpression("4*5"), 20);
assert.equal(evaluateExpression("10/2"), 5);
assert.equal(evaluateExpression("3+2*2"), 7);
assert.equal(evaluateExpression("invalid"), "Error");

console.log("✅ Todas las pruebas pasaron correctamente.");
