/** @format */

function diagonalDifference(arr) {
  // Write your code here
  let sum1 = 0;
  let sum2 = 0;
  let result = 0;
  arr.shift();
  arr.forEach((element, index) => {
    sum1 += element[index];
    sum2 += element[element.length - 1 - index];
  });
  result = Math.abs(sum1 - sum2);
  return result;
}

//Input format
// The first line contains a single integer, `n`, the number of rows and columns in the square matrix `arr`.
// Each of the next `n` lines describes a row,`arr[i]` , and consists of `n` space-separated integers `arr[i][j]`.

//calling the function with array as input format
let result = diagonalDifference([3, [11, 2, 4], [4, 5, 6], [10, 8, -12]]);

//consoling the final result of the function
console.log(result);
