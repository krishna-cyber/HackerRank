/** @format */
//problem to find at the same position in the same time.

function kangaroo(x1, v1, x2, v2) {
  if (x1 == x2 && v1 == v2) {
    return "YES";
  } else if (x1 == x2 && v1 != v2) {
    return "NO";
  } else if ((x1 < x2 && v2 > v1) || (x2 < x1 && v1 > v2)) {
    return "NO";
  } else {
    let result = "NO";
    for (i = 1; i <= 10000; i++) {
      x1 += v1;
      x2 += v2;
      if (x1 == x2) {
        return "YES";
      }
    }
    return result;
  }
}

//calling the function

let result = kangaroo(0, 3, 4, 2);
console.log(result);
