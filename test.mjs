import { sumar, restar, multiplicar, dividir } from './calculator.js';

function test(description, actual, expected) {
  if (actual === expected) {
    console.log(`✅ ${description}`);
  } else {
    console.error(`❌ ${description}: esperado ${expected}, obtenido ${actual}`);
    process.exit(1);
  }
}

test("Suma 5 + 3", sumar(5, 3), 8);
test("Resta 10 - 6", restar(10, 6), 4);
test("Multiplica 2 * 3", multiplicar(2, 3), 6);
test("Divide 9 / 3", dividir(9, 3), 3);

try {
  dividir(4, 0);
  console.error("❌ División por cero no lanzó error");
  process.exit(1);
} catch {
  console.log("✅ División por cero lanza error");
}
