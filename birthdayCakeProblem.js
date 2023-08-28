/** @format */

function countHighestNumber(arr) {
  arr.sort((a, b) => b - a);
  let birthdayNumber = arr[0];
  let count = 0;
  arr.filter((element) => {
    element == birthdayNumber ? count++ : {};
  });
  console.log(count);
}

//calling the function
countHighestNumber([6, 7, 5, 4, 7, 7]);
