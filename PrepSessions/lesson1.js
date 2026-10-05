// write a function called fizzBuzz that receives a number.

// Starting from 1 up to that number,
// If a number is divisible by 3, output "Fizz"
// If a number is divisible by 5, output "Buzz"
// If a number is divisible by both 3 and 5, output "FizzBuzz"

//The result should e returned as one string separated by a space

function fizzBuzz(num) {
  let output = [];

  for (let i = 1; i <= num; i++) {
    let result = "";

    if (i % 3 === 0 && i % 5 === 0) {
      result = "FizzBuzz";
    } else if (i % 3 === 0) {
      result = "Fizz";
    } else if (i % 5 === 0) {
      result = "Buzz";
    } else {
      result = String(i);
    }

    output.push(result);
  }

  return output;
}

// console.log(fizzBuzz(6));
// console.log(fizzBuzz(10));
console.log(fizzBuzz(15));