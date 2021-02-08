function reverseWords(str) {
  // Go for it
  let res = "";
  const arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    res += arr[i].split("").reverse().join("") + " ";
  }
  return res.slice(0, res.length - 1);
}

console.log(
  reverseWords("The quick brown fox jumps over the lazy dog."),
  "ehT kciuq nworb xof spmuj revo eht yzal .god"
);
console.log(reverseWords("apple"), "elppa");
console.log(reverseWords("a b c d"), "a b c d");
console.log(reverseWords("double  spaced  words"), "elbuod  decaps  sdrow");
