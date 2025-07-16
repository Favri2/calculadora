export function evaluateExpression(expr) {
  try {
    const result = eval(expr);
    return result;
  } catch {
    return "Error";
  }
}
