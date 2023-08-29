/** @format */

function gradeMaster(grades) {
  //write code here
  let result = [];
  grades.forEach((element) => {
    if (element < 38) {
      result.push(element);
    } else {
      let diff = 5 - (element % 5);
      if (diff < 3) {
        result.push(element + diff);
      } else {
        result.push(element);
      }
    }
  });
  return result;
}

//calling the function
let result = gradeMaster([73, 67, 38, 33]);
console.log(result);
