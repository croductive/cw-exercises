function sumMix(x) {
  var intArray = x.map(function (e) {
    return parseInt(e);
  });
  var sum = intArray.reduce((a, b) => {
    return a + b;
  });

  return sum;
}

console.log(sumMix([9, 3, "7", "3"]), 22);
console.log(sumMix(["5", "0", 9, 3, 2, 1, "9", 6, 7]), 42);
console.log(sumMix(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]), 41);
