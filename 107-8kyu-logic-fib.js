function fib(n) {
  var a = 0,
    b = 1;
  for (var i = 0; i < n; i++) {
    var temp = a + b;
    a = b;
    b = temp;
  }
  return a;
}

console.log(fib(17), 1597, "Should have returned 1597");
console.log(fib(20), 6765, "Should have returned 6765");
console.log(fib(0), 0, "Should have returned 0");
console.log(fib(4), 3, "Should have returned 3");
