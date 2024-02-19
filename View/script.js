function calculate(operator) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  let result;

  switch (operator) {
    case '+':
      result = CalculatorModel.add(num1, num2);
      break;
    case '-':
      result = CalculatorModel.subtract(num1, num2);
      break;
    case '*':
      result = CalculatorModel.multiply(num1, num2);
      break;
    case '/':
      result = CalculatorModel.divide(num1, num2);
      break;
    default:
      result = 'Error: Invalid operator';
  }

  document.getElementById('result').textContent = `Result: ${result}`;
}
