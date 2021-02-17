function ipsBetween(start, end) {
  //TODO
  const calc = (n, m = 1) => (end.split(".")[n] - start.split(".")[n]) * m;
  return calc(0, 256 * 256 * 256) + calc(1, 256 * 256) + calc(2, 256) + calc(3);
}

console.log(ipsBetween("10.0.0.0", "10.0.0.50"), 50);
console.log(ipsBetween("20.0.0.10", "20.0.1.0"), 246);
