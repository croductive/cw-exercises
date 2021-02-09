// complete the function
function solution(string) {
  let final = "";

  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (char === char.toUpperCase()) {
      final += ` ${char}`;
    } else {
      final += char;
    }
  }
  return final;
}

console.log(solution("camelCasing"), "camel Casing", "Unexpected result");
console.log(
  solution("camelCasingTest"),
  "camel Casing Test",
  "Unexpected result"
);
