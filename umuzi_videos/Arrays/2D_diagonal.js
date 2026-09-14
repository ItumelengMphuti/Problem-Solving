// Return diagonal elements 1, 5, 9
// function twoD(arr) {
//   let list = [];
//   for (let i = 0; i < arr.length; i++) {
//     for(let j = 0; j < arr.length; j++) {
//         if(i === j) {
//             list.push(arr[i][j]);  
//         }
//     }
//   }
//   return list;
// }

function twoD(arr) {
  return arr.map((item, index) => {
    return item[index]
  })
}


console.log(
  twoD([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
