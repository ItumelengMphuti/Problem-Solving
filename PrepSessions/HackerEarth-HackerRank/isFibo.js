function isFibo(n) {
  const n1 = 0;
  const n2 = 1;
  const next = n1 + n2;

  let i = 2;
  while(next < n) {
    n[i] = n[i - 1] + n[i - 2];
    i++
  }
  
  for (let i = 0; i <= fib.length; i++) {
    if (fib[i] === n) {
      return "isFibo";
    }
  }
  return "isNotFibo";
}
console.log(isFibo(1));
console.log(isFibo(7));
console.log(isFibo(8));
