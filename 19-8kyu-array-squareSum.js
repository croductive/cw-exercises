function squareSum(numbers) {
  this.numbers = numbers;
  let sum = 0;
  for (let i = 0; i <= numbers.length - 1; i++) {
    sum = sum + numbers[i] * numbers[i];
  }
  return sum;
}

console.log(squareSum([1, 2]), 5);
console.log(squareSum([0, 3, 4, 5]), 50);

// reduce
function squareSum2(numbers) {
  return numbers.reduce(function (sum, n) {
    return n * n + sum;
  }, 0);
}

console.log(squareSum2([1, 2]), 5);
console.log(squareSum2([0, 3, 4, 5]), 50);
