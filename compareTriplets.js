/**
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 *
 * @format
 */

function compareTriplets(a, b) {
  let alice = 0;
  let bob = 0;
  let result = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) alice++;
    if (a[i] < b[i]) bob++;
  }

  result.push(alice, bob);
  return result;
}

let result = compareTriplets([1, 2, 3], [3, 2, 1]);
console.log(result);
