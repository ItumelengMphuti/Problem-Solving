// BROKEN CODE
class InvalidTypeError extends Error {
  constructor(message) {
    super(message)
    this.name = "InvalidTypeError";
  }
}

class InvalidAgeError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidAgeError";
  }
}

function validateAge(age) {
    if (age < 0 || age > 120) {
    throw new InvalidAgeError("Age must be between 0 and 120");
  }
  if (typeof age !== "number") {
    throw new InvalidTypeError("Age must be a number");
  }
  
  return "Valid age";
}

try {
  console.log(validateAge(25)); // should print "Valid age"
   // should throw InvalidTypeError
  console.log(validateAge(200));
  console.log(validateAge("old")); // should throw InvalidAgeError
} catch (err) {
  console.log(`${err.name}: ${err.message}`);
}
