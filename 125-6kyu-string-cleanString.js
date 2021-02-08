function cleanString(str) {
  let result = [];

  Test.assertEquals;
  Test.assertEquals;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "#") {
      result.pop();
    } else {
      result.push(char);
    }
  }
  return result.join("");
}

console.log(cleanString("abc#d##c"), "ac");
console.log(cleanString("abc####d##c#"), "");
