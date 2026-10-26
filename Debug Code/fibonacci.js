function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  let previous = 0;
  let current = 1;

  for (let i = 2; i <= n; i++) {
    let next = previous + current;
    previous = current;
    current = next;
  }

  return current;
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(6)); // 8
