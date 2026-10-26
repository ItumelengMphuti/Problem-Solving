function rotateLeft(arr, d) {
  for (let i = 1; i <= d; i++) {
    const first = arr[0];
    arr.push(first);
    arr.shift();
    
  }
  return arr;
}

console.log(rotateLeft([1, 2, 3, 4, 5], 2));
// [3, 4, 5, 1, 2]
