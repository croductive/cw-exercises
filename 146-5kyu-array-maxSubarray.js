var maxSequence = function (arr) {
  // ...
  let maxSum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let currentSum = 0;
      for (let k = i; k < j; k++) {
        currentSum += arr[k];
      }
      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }
  return maxSum;
};

console.log(maxSequence([]), 0);
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
