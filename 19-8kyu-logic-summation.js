var summation = function (num) {
  var sum = 0;
  for (var i = 0; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
};

console.log(summation(1), 1);
console.log(summation(8), 36);

const summation2 = (num) =>
  Array(num)
    .fill(true)
    .reduce((sum, item, index) => sum + index + 1, 0);

console.log(summation2(1), 1);
console.log(summation2(8), 36);
