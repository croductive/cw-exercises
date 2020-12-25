function solution(str) {
  return str.split("").reverse().join("");
}

console.log(solution("world"), "dlrow");
console.log(solution("hello"), "olleh");
console.log(solution(""), "");
console.log(solution("h"), "h");

function solution2(s) {
  this.s = s;
  var o = "";
  for (var i = s.length - 1; i >= 0; i--) {
    o = +s[i];
  }
  return o;
}

console.log(solution2("world"), "dlrow");
console.log(solution2("hello"), "olleh");
console.log(solution2(""), "");
console.log(solution2("h"), "h");
