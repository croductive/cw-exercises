String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  return this.split("").map(changeCase).join("");
};

function changeCase(char) {
  if (char.toLowerCase() === char) {
    return char.toUpperCase();
  }
  return char.toLowerCase();
}

console.log("hello world".toAlternatingCase(), "HELLO WORLD");
console.log("HELLO WORLD".toAlternatingCase(), "hello world");
console.log("hello WORLD".toAlternatingCase(), "HELLO world");
console.log("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
console.log("12345".toAlternatingCase(), "12345");
console.log("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
console.log(
  "String.prototype.toAlternatingCase".toAlternatingCase(),
  "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
);
console.log(
  "Hello World".toAlternatingCase().toAlternatingCase(),
  "Hello World"
);
