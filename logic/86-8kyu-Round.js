function Round(n) {
  return n.toFixed(2);
}

console.log(Round(0.134), "0.13");
console.log(Round(0.11234), "0.11");
console.log(Round(0.159), "0.16");
console.log(Round(0.56888), "0.57");
console.log(Round(1), "1.00");
console.log(Round(9.9999), "10.00");
