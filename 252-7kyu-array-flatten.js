function flatten(array) {
  let flattened = [];

  for (let i = 0; i < array.length; i++) {
    const currentValue = array[i];
    if (Array.isArray(currentValue)) {
      for (let j = 0; j < currentValue.length; j++) {
        const innerValue = currentValue[j];
        flattened.push(innerValue);
      }
    } else {
      flattened.push(currentValue);
    }
  }
  return flattened;
}

console.log(flatten([]), []);
console.log(flatten([1, 2, 3]), [1, 2, 3]);
console.log(
  flatten([
    [1, 2, 3],
    ["a", "b", "c"],
    [1, 2, 3],
  ]),
  [1, 2, 3, "a", "b", "c", 1, 2, 3]
);
console.log(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]), [
  3,
  4,
  5,
  [9, 9, 9],
  "a,b,c",
]);
console.log(flatten([[[3], [4], [5]], [9], [9], [8], [[1, 2, 3]]]), [
  [3],
  [4],
  [5],
  9,
  9,
  8,
  [1, 2, 3],
]);
