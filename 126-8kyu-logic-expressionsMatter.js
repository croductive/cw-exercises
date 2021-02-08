function expressionMatter(a, b, c) {
  const x1 = a * (b + c);
  const x2 = a * b * c;
  const x3 = a + b * c;
  const x4 = a + b + c;
  const x5 = (a + b) * c;
  return Math.max(x1, x2, x3, x4, x5);
}

console.log(expressionMatter(2, 1, 2), 6);
console.log(expressionMatter(2, 1, 1), 4);
console.log(expressionMatter(1, 1, 1), 3);
console.log(expressionMatter(1, 2, 3), 9);
console.log(expressionMatter(1, 3, 1), 5);
console.log(expressionMatter(2, 2, 2), 8);
