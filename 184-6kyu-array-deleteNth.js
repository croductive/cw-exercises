function deleteNth(arr, n) {
  // ...
  let filtered = [];
  let occurances = {};

  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    if (!occurances[ele]) {
      occurances[ele] = 1;
    } else {
      occurances[ele] += 1;
    }

    if (occurances[ele] <= n) {
      filtered.push(ele);
    }
  }
  return filtered;
}

console.log(deleteNth([20, 37, 20, 21], 1), [20, 37, 21]);
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3), [
  1,
  1,
  3,
  3,
  7,
  2,
  2,
  2,
]);
