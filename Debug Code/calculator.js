function calculator(a, b, operator) {
  const operatorRegex = /^[-+*/]$/;
  if (!operatorRegex.test(operator)) {
    return "Invalid operator";
  }

  if (operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    if (b === 0) {
     return "We cannot divide by 0";
    }
    return a / b;
  }

  return "Invalid operator";
}

console.log(calculator(10, 5, "+")); // 15
console.log(calculator(10, 5, "-")); // 5
console.log(calculator(10, 0, "/")); // Error message expected
console.log(calculator(10, 5, "%")); // Invalid operator
