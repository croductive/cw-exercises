function rot13(str) {
  return Array.prototype.reduce.call(
    str,
    (deciphered, value, i) => {
      const charCode = str.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        const cipherCode = ((charCode - 65 + 13) % 26) + 65;
        return deciphered + String.fromCharCode(cipherCode);
      } else if (charCode >= 97 && charCode <= 122) {
        const cipherCode = ((charCode - 97 + 13) % 26) + 97;
        return deciphered + String.fromCharCode(cipherCode);
      } else {
        return deciphered + value;
      }
    },
    ""
  );
}

console.log(
  "grfg" == rot13("test"),
  "Input: test , Expected Output: grfg , Actual Output: " + rot13("test")
);
console.log(
  "Grfg" == rot13("Test"),
  "Input: Test , Expected Output: Grfg , Actual Output: " + rot13("Test")
);
