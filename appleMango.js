/** @format */
function countApplesAndOranges(s, t, a, b, apples, oranges) {
  //function defination and decleration
  // Write your code here
  let result = [];
  let appleCount = 0;
  let orangeCount = 0;
  apples.forEach((element) => {
    element + a >= s && element + a <= t ? appleCount++ : {};
  });
  oranges.forEach((element) => {
    b + element <= t && b + element >= s ? orangeCount++ : {};
  });
  result.push(appleCount, orangeCount);
  return result;
}

//calling the function
let count = countApplesAndOranges(7, 10, 4, 12, [1, 4, 3], [-2, 2, -3]);
console.log(count);
