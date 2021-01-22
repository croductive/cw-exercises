function doubleChar(str) {
  // Your code here
  var mojstr = "";
  for (var i = 0; i <= str.length - 1; i++) {
    mojstr += str[i] + str[i];
  }
  return mojstr;
}

console.log(doubleChar("abcd"), "aabbccdd");
console.log(doubleChar("Adidas"), "AAddiiddaass");
console.log(doubleChar("1337"), "11333377");
console.log(doubleChar("illuminati"), "iilllluummiinnaattii");
console.log(doubleChar("123456"), "112233445566");
console.log(doubleChar("%^&*("), "%%^^&&**((");
