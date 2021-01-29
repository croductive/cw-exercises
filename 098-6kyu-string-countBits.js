var countBits = function (n) {
  // Program Me
  var x = (n >>> 0).toString(2);
  var result = 0,
    i = 0;
  for (i; i < x.length; i++) if (x[i] == "1") result++;
  return result;
};

console.log(countBits(0), 0);
console.log(countBits(4), 1);
console.log(countBits(7), 3);
console.log(countBits(9), 2);
console.log(countBits(10), 2);
