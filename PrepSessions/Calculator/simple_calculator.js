function calculate(val1, val2, operator) {
  let result = 0;
  const value1 = val1.toString().trim();
  const value2 = val2.toString().trim();

  if (value1 === " " || value2 === " " || !operator) {
    throw new Error("Please enter the required inputs.");
  }

  const floatValue1 = Number(value1);
  const floatValue2 = Number(value2);

  if (!Number.isFinite(floatValue1) || !Number.isFinite(floatValue2)) {
    throw new Error("Inputs not numbers.");
  }

  switch (operator.toLowerCase().trim()) {
    case "add":
      result = floatValue1 + floatValue2;
      break;
    case "subtract":
      result = floatValue1 - floatValue2;
      break;
    case "multiply":
      result = floatValue1 * floatValue2;
      break;
    case "divide":
      if (floatValue2 === 0) {
        return "Cannot divide by 0";
      } else {
        result = floatValue1 / floatValue2;
      }
      break;
    default:
      throw new Error("Invalid inputs");
  }
  return result;
}

// Examples
console.log(calculate("   ", 5, "add"));
// console.log(calculate("Infinity", 2, "add"));
15;
console.log(calculate(10, 0, "subtract"));
// 5
console.log(calculate(10, 5, "multiply"));
// 50
console.log(calculate(0, 10, "divide"));
// console.log(calculate(10, 5, "power"));
//
