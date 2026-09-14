// Return diagonal elements 3, 5, 7
// function twoD(arr) {
//   let list = [];
//   for (let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length; j++) {
//         if(i + j === 2) {
//             list.push(arr[i][j]);
//         }
//     }
//   }
//   return list;
// }

function twoD(arr) {
 
  return arr.map((item, index) => {
    return item[arr.length - index - 1]
  })
}
console.log(
  twoD([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
