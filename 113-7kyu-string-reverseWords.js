function reverseWords(str) {
  // Go for it
  let res = "";
  const arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    res += arr[i].split("").reverse().join("") + " ";
  }
  return res.slice(0, res.length - 1);
}

function reverseWords1(str) {
  // Go for it
  let strArr = str.split(" ");

  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = reverse(strArr[i]);
  }
  return strArr.join(" ");
}

function reverse(str) {
  let newStr = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

console.log(
  reverseWords("The quick brown fox jumps over the lazy dog."),
  "ehT kciuq nworb xof spmuj revo eht yzal .god"
);
console.log(reverseWords("apple"), "elppa");
console.log(reverseWords("a b c d"), "a b c d");
console.log(reverseWords("double  spaced  words"), "elbuod  decaps  sdrow");

console.log1(
  reverseWo1rds("The quick brown fox jumps over the lazy dog."),
  "ehT kciu1q nworb xof spmuj revo eht yzal .god"
);
console.log1(reverseWords("apple"), "elppa");
console.log1(reverseWords("a b c d"), "a b c d");
console.log1(reverseWords("double  spaced  words"), "elbuod  decaps  sdrow");
