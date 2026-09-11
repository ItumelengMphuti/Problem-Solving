// Write a function divide that takes two numbers and returns the result of dividing the first by the second.
// If the second number is 0, throw a custom error called DivisionByZeroError with the message "Cannot divide by zero". The calling function must catch this and return null.

// divide(10, 2);  // 5
// divide(9, 3);   // 3
// divide(5, 0);   // throws DivisionByZeroError

//NB CUSTOM ERRORS!!
class DivisionByZeroError extends Error {
    constructor() {
        super("Cannot divede by zero");
        this.name = "DivisionByZeroError";
    }
}

function divide(a, b) {
    if(b === 0) {
        throw new DivisionByZeroError();
    }
    return a / b;
}

console.log(divide(10, 2));  // 5
console.log(divide(9, 3));   // 3
console.log(divide(5, 0));   // throws DivisionByZeroError