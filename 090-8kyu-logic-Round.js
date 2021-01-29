function Round(n, p) {
  return n.toFixed(p);
}

console.log(Round(0.134, 2), "0.13");
console.log(Round(0.1123, 1), "0.1");
console.log(Round(0.11289, 3), "0.113");
console.log(Round(1.56881, 3), "1.569");
console.log(Round(1.56881, 4), "1.5688");
