function distribute(m, n) {
  if (n < 1) return [];
  let arr = new Array(n).fill(0);
  for (let i = 0; i < m; ++i) {
    ++arr[i % n];
  }
  return arr;
}

console.log(
  distribute(-5, 10).sort((a, b) => a - b),
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
console.log(
  distribute(0, 10).sort((a, b) => a - b),
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
);
console.log(
  distribute(5, 10).sort((a, b) => a - b),
  [0, 0, 0, 0, 0, 1, 1, 1, 1, 1]
);
console.log(
  distribute(10, 10).sort((a, b) => a - b),
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
);
console.log(
  distribute(15, 10).sort((a, b) => a - b),
  [1, 1, 1, 1, 1, 2, 2, 2, 2, 2]
);
console.log(distribute(-5, 0), []);
console.log(distribute(0, 0), []);
console.log(distribute(5, 0), []);
console.log(distribute(10, 0), []);
console.log(distribute(15, 0), []);
console.log(distribute(-5, -5), []);
console.log(distribute(0, -5), []);
console.log(distribute(5, -5), []);
console.log(distribute(10, -5), []);
console.log(distribute(15, -5), []);
