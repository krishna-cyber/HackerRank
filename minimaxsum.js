/** @format */

function minmaxsum(arr) {
  let originalArr = [...arr];
  let ascended = arr.sort((a, b) => a - b);
  let descended = originalArr.sort((a, b) => b - a);
  let min = 0;
  let max = 0;
  ascended.pop();
  descended.pop();
  ascended.forEach((element) => {
    min += element;
  });
  descended.forEach((element) => {
    max += element;
  });
  console.log(min, max);
}

//calling the function
minmaxsum([1, 2, 3, 4, 5]);
