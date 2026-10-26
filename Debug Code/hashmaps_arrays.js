function mostFrequent(numbers) {
  const frequency = {}; // Empty Hashmap

  for (const number of numbers) {
    frequency[number] = (frequency[number] || 0) + 1;
  }

  let highestCount = 0;
  let result = null;

  for (const number of numbers) {
    if (frequency[number] > highestCount) {
      highestCount = frequency[number];
      result = number;
    }
  }

  return result;
}

console.log(mostFrequent([2, 3, 2, 4, 2, 3])); // 2
console.log(mostFrequent([5, 5, 8, 8])); // 5
console.log(mostFrequent([])); // null
