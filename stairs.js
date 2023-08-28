/** @format */

function stair(n) {
  let string = "";
  let space = " ";
  let hash = "#";
  for (let i = 0; i < n; i++) {
    string = space.repeat(n - i - 1) + hash.repeat(i + 1);
    console.log(string);
  }
}

//calling function
stair(5);
