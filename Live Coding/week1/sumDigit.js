// Write a recursive function sumDigits that takes a positive integer and returns the sum of all its digits.
// You must not convert the number to a string.

// sumDigits(123);  // 6  (1+2+3)
// sumDigits(456);  // 15 (4+5+6)
// sumDigits(7);    // 7

function sumDigits(n) {
  if (n === 0) {
    return 0;
  }

  return (n % 10) + sumDigits(Math.floor(n / 10));
}