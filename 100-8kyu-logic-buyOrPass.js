function buyOrPass(stockPrice, allTimeHigh) {
  // your code here
  if (stockPrice <= 0.8 * allTimeHigh) return "Buy";
  if (stockPrice > 0.8 * allTimeHigh) return "Pass";
}

console.log(buyOrPass(46.74, 58.43), "Buy");
console.log(buyOrPass(200, 200), "Pass");
console.log(buyOrPass(100, 180), "Buy");
