/** @format */

function ratioFinder(arr) {
  let positive = 0;
  let negative = 0;
  let zero = 0;
  let postitiveRatio = 0;
  let negativeRatio = 0;
  let zeroRatio = 0;
  let result = [];
  arr.forEach((element) => {
    element == 0 ? zero++ : element > 0 ? positive++ : negative++;
  });
  postitiveRatio = positive / arr.length;
  negativeRatio = negative / arr.length;
  zeroRatio = zero / arr.length;
  result.push(postitiveRatio, negativeRatio, zeroRatio);
  return result;
}

//calling function

const result = ratioFinder([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(result);
