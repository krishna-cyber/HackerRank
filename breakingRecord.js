/** @format */

function breakingRecords(scores) {
  // Write your code here
  let highScore = scores[0];
  let lowScore = scores[0];
  let highCount = 0;
  let lowCount = 0;
  for (let i = 0; i < scores.length; i++) {
    if (highScore < scores[i]) {
      highScore = scores[i];
      highCount++;
    }
    if (lowScore > scores[i]) {
      lowScore = scores[i];
      lowCount++;
    }
  }
  return [highCount, lowCount];
}

//calling the function
let result = breakingRecords([4, 5, 7, 8, 9, 10, 4, 3, 6]);

console.log(result);
