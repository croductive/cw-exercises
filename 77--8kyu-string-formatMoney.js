function formatMoney(amount) {
  // your formatting code here
  var twoDecimal = amount.toFixed(2);
  return `$${twoDecimal}`;
}

console.log(
  formatMoney(39.99),
  "$39.99",
  "That's not formatted the way we expected."
);
