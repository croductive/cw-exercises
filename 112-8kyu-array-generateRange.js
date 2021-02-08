function generateRange(min, max, step) {
  const res = [];
  for (let i = min; i <= max; i += step) {
    res.push(i);
  }
  return res;
}

console.log(generateRange(2, 10, 2), [2, 4, 6, 8, 10]);
