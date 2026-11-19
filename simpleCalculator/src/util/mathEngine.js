export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => {
  if (b === 0) return 'Error: Div by 0';
  return a / b;
}; 
//new function for exponentiation
export const exponentiate = (a, b) => Math.pow(a, b);
//new function for square root
export const squareRoot = (a) => {
    if (a < 0) return 'Error: Negative root';
    return Math.sqrt(a);
}

//a calculation orchestrator to map operations cleanly
export const calculate = (num1, num2, operator) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) return n2;

    switch (operator) {
        case '+':
            return add(n1, n2);
        case '-':
            return subtract(n1, n2);
        case '*':
            return multiply(n1, n2);
        case '/':
            return divide(n1, n2);
        //new case for exponentiation
        case '^':
            return exponentiate(n1, n2);
        //new case for square root
        case '√':
            return squareRoot(n1);
        default:
            return n2;
    }
};