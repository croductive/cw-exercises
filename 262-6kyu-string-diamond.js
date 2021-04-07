function diamond(n) {
  if (n <= 0 || n % 2 === 0) return null;

  let diamond = "";
  diamond += "*".repeat(n) + "\n";
  let numSpaces = 1;
  for (let i = n - 2; i >= 0; i -= 2) {
    const line = " ".repeat(numSpaces) + "*".repeat(i) + "\n";
    diamond = line + diamond + line;
    numSpaces += 1;
  }
  return diamond;
}

console.log(diamond(1), "*\n");
console.log(diamond(3), " *\n***\n *\n");
console.log(diamond(5), "  *\n ***\n*****\n ***\n  *\n");
console.log(diamond(2), null);
console.log(diamond(-3), null);
console.log(diamond(0), null);
