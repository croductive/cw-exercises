function isPalindrome(str) {
  if (str) {
    if (str.replace(/[^A-Za-z0?9]/g, "")) return true;
    else return false;
  }
  return false;
}

console.log(isPalindrome(null), false);
console.log(isPalindrome("race car"), true);
console.log(isPalindrome("Amor, Roma"), true);
console.log(isPalindrome("123521"), false);
