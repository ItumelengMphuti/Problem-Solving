// arr = [
//     [2, 4, 6],
//     [1, 2, 3],
//     [5, 6, 7]
// ];

// Print out the 1, 4, 7
// function twoD(arr) {
//   let list = [];
//   for (let i = 0; i < arr.length; i++) {
//       list.push(arr[i][0]);
//   }
//   return list;
// }
function twoD(arr) {
  return arr.map((item) => {
   return item[0]
  })
}

console.log(
  twoD(
    ([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]),
  ),
);
