/** @format */

function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
   */
  //make an array sum of all the keyboards and drives
  let sum = [];

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      sum.push(keyboards[i] + drives[j]);
    }
  }

  //filter the array sum having less than or equal to balance
  let array = sum.filter((element) => element <= b);
  if (array.length > 0) {
    let max = Math.max(...array);
    return max;
  } else {
    return -1;
  }
}

//calling the function

let result = getMoneySpent([10, 15, 18], [3, 4, 2], 20);

console.log(result);
