/** @format */

function camelcase(s) {
  // Write your code here
  let counter = 1;
  let arr = s.split("");
  arr.forEach((element) => {
    if (element.toUpperCase() === element) {
      counter++;
    }
  });
  return counter;
}

//calling the function
let words = camelcase("thisIsTheCamalCaseWord");
console.log(words);
