function findUniq(array) {
  // do magic
  array.sort((a, b) => a - b);
  if (array[0] !== array[1]) {
    return array[0];
  } else {
    return array[array.length - 1];
  }
}

console.log(findUniq([0, 1, 0]), 1);
console.log(findUniq([1, 1, 1, 2, 1, 1]), 2);
console.log(findUniq([3, 10, 3, 3, 3]), 10);
