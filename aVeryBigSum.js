/** @format */

function aVeryBigSum(ar) {
  // Write your code here
  let sum = 0;
  for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
  }
  return sum;
}

let sum = aVeryBigSum([
  1000000001, 1000000002, 1000000003, 1000000004, 1000000005,
]);

console.log(sum);
