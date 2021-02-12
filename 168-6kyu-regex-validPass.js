function validPass(password) {
  const length = password.length;
  const NW = /\W/g;
  const LN = /\d[a-zA-Z]|[a-zA-z]\d/g;
  if (length > 3 && length < 20) {
    if (password.match(NW)) {
      return "INVALID";
    } else if (password.match(LN)) {
      return "VALID";
    } else return "INVALID";
  } else {
    return "INVALID";
  }
}

console.log(validPass("Username123"), "VALID");
console.log(validPass("Username"), "INVALID");
console.log(validPass("1Username"), "VALID");
console.log(validPass("123"), "INVALID");
console.log(validPass("a12"), "INVALID");
console.log(validPass("Username123!"), "INVALID");
console.log(validPass("ThisPasswordIsTooLong1234"), "INVALID");
