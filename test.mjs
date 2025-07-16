import { evaluateExpression } from './calculator.js';

const tests = [
  { input: "2+3", expected: 5 },
  { input: "4*5", expected: 20 },
  { input: "10/2", expected: 5 },
  { input: "3+2*2", expected: 7 },
  { input: "invalid", expected: "Error" },
];

let passed = 0;

console.log("🔍 Ejecutando pruebas unitarias para la calculadora:\n");

for (const { input, expected } of tests) {
  const result = evaluateExpression(input);
  const success = result === expected;

  if (success) {
    console.log(`✅ "${input}" = ${result} (esperado: ${expected})`);
    passed++;
  } else {
    console.error(`❌ "${input}" => ${result} (esperado: ${expected})`);
  }
}

console.log(`\n🧪 Resultados: ${passed}/${tests.length} pruebas pasaron.\n`);

if (passed !== tests.length) {
  // Falla el proceso si alguna prueba falla (útil para GitHub Actions)
  process.exit(1);
}
