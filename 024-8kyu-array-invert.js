function invert(array) {
  var arrayI = [];
  for (var i = 0; i <= array.length - 1; i++) {
    arrayI.push(-1 * array[i]);
  }
  return arrayI;
}

console.log(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
console.log(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
console.log(invert([]), []);
console.log(invert([0]), [0]);
