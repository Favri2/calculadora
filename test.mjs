import { sumar, restar, multiplicar, dividir } from './calculator.js';

const assert = (desc, actual, expected) => {
  if (actual === expected) {
    console.log(`✅ ${desc}`);
  } else {
    throw new Error(`❌ ${desc} - esperado: ${expected}, obtenido: ${actual}`);
  }
};

assert('Suma 2 + 3', sumar(2, 3), 5);
assert('Resta 7 - 2', restar(7, 2), 5);
assert('Multiplica 3 * 4', multiplicar(3, 4), 12);
assert('Divide 10 / 2', dividir(10, 2), 5);

try {
  dividir(4, 0);
  throw new Error('❌ División por cero no lanzó error');
} catch {
  console.log('✅ División por cero lanza error');
}
