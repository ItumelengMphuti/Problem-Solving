function firstDuplicate(numbers) {
  const seen = {};

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];

    if (seen[number]) {
      return number;
    }

    seen[number] = true;
  }

  return null;
}

console.log(firstDuplicate([2, 1, 3, 2, 1])); // 2
console.log(firstDuplicate([4, 5, 6])); // null
console.log(firstDuplicate([7, 7, 8])); // 7
console.log(firstDuplicate([])); // null
