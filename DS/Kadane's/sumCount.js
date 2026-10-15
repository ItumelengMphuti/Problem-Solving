function sumCounts(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    let diff = new Set();
    for (let j = i; j < nums.length; j++) {
      diff.add(nums[j] ** 2);
      sum += diff.size ** 2;
    }
  }
  return sum;
}

console.log(sumCounts([1, 2, 1]));
console.log(sumCounts([1, 1]));
