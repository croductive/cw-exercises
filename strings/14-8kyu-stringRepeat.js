function repeatStr(n, s) {
  var str = "";
  for (var i = 0; i <= n - 1; i++) {
    str = str + s;
  }
  return str;
}

console.log(repeatStr(3, "*"), "***");
console.log(repeatStr(5, "#"), "#####");
console.log(repeatStr(2, "ha "), "ha ha ");
