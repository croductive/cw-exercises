function scramble(str1, str2) {
  var map = {};
  for (var i in str1) {
    map[str1[i]] ? map[str1[i]]++ : (map[str1[i]] = 1);
  }
  for (var i in str2) {
    if (!map[str2[i]]) return false;
    map[str2[i]]--;
  }
  return true;
}

console.log(scramble("rkqodlw", "world"), true);
console.log(scramble("cedewaraaossoqqyt", "codewars"), true);
console.log(scramble("katas", "steak"), false);
console.log(scramble("scriptjava", "javascript"), true);
console.log(scramble("scriptingjava", "javascript"), true);
console.log(scramble("scriptsjava", "javascripts"), true);
console.log(scramble("jscripts", "javascript"), false);
console.log(scramble("aabbcamaomsccdd", "commas"), true);
