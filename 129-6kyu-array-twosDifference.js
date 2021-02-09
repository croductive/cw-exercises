function reverse(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
}

console.log(twosDifference([1, 2, 3, 4]), [
  [1, 3],
  [2, 4],
]);
console.log(twosDifference([1, 3, 4, 6]), [
  [1, 3],
  [4, 6],
]);
