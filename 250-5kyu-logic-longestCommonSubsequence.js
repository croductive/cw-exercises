function LCS(x, y) {
  yChar = y.split("");
  let start = 0;
  let arr = [];

  for (var i = 0; i < yChar.length; i++) {
    pos = x.indexOf(yChar[i], start);
    if (pos >= start) {
      arr.push(yChar[i]);
      start = pos + 1;
    }
  }
  return arr.join("");
}

console.log(LCS("a", "b"), "");
console.log(LCS("abcdef", "abc"), "abc");
