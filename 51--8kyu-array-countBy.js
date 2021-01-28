function countBy(x, n) {
  this.n = n;
  this.x = x;
  var z = [];
  for (var i = 0; i < n; i++) {
    z.push(x * (i + 1));
  }
  return z;
}

console.log(countBy(1, 5), [1, 2, 3, 4, 5], "Array does not match");
console.log(countBy(2, 5), [2, 4, 6, 8, 10], "Array does not match");
