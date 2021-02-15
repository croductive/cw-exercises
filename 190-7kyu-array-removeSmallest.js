function removeSmallest(numbers) {
  let low = { num: Infinity, idx: 0 };

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < low["num"]) {
      low["num"] = numbers[i];
      low["idx"] = i;
    }
  }
  return numbers.slice(0, low["idx"]).concat(numbers.slice(low["idx"] + 1));
}

console.log(
  removeSmallest([1, 2, 3, 4, 5]),
  [2, 3, 4, 5],
  "Wrong result for [1, 2, 3, 4, 5]"
);
console.log(
  removeSmallest([5, 3, 2, 1, 4]),
  [5, 3, 2, 4],
  "Wrong result for [5, 3, 2, 1, 4]"
);
console.log(
  removeSmallest([2, 2, 1, 2, 1]),
  [2, 2, 2, 1],
  "Wrong result for [2, 2, 1, 2, 1]"
);
console.log(removeSmallest([]), [], "Wrong result for []");
