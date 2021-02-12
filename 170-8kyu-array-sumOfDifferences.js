function sumOfDifferences(arr) {
  if (arr.length < 2) return 0;

  arr.sort((a, b) => a - b).reverse();

  diffs = [];
  for (let i = 0; i < arr.length; i++) {
    diffs.push(arr[i] - arr[i + 1]);
  }

  diffs.pop();
  return diffs.reduce((a, b) => a + b);
}

console.log(sumOfDifferences([1, 2, 10]), 9);
console.log(sumOfDifferences([-3, -2, -1]), 2);
