export function evaluateExpression(expression) {
  try {
    const sanitized = expression.replace(/[^-()\d/*+.]/g, '');
    const result = eval(sanitized);
    return Number.isFinite(result) ? result.toString() : "Error";
  } catch {
    return "Error";
  }
}
