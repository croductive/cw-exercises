function sumArray(array) {
  var novi = array.sort(function (a, b) {
    return a - b;
  });
  var sum = 0;
  for (var i = 1; i < array.length - 1; i++) {
    sum += novi[i];
  }
  return sum;
}

console.log(sumArray([6, 2, 1, 8, 10]), 16);
