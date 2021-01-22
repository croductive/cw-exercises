function smash(words) {
  if (words == []) return "";
  else return words.reduce((x, y) => x + " " + y);
}

console.log(smash(["hello"]), "hello");
console.log(smash(["hello", "world"]), "hello world");
