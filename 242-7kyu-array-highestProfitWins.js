function minMax(arr) {
  if (arr.length == 1) return [arr[0], arr[0]];
  return arr.reduce(
    ([min, max], value) => {
      if (value < min) {
        min = value;
      }
      if (value > max) {
        max = value;
      }
      return [min, max];
    },
    [Infinity, -Infinity]
  );
}

console.log(minMax([1, 2, 3, 4, 5], [1, 5]));
console.log(minMax([2334454, 5], [5, 2334454]));
