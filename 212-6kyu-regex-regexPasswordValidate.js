function validate(password) {
  const longEnough = /^[A-Za-z0-9]{6,}$/g.test(password);
  const hasLowercase = /[a-z]/g.test(password);
  const hasUppercase = /[A-Z]/g.test(password);
  const hasNumber = /\d/g.test(password);
  return longEnough && hasLowercase && hasUppercase && hasNumber;
}

console.log(validate("djI38D55"), "djI38D55 - Expected true");
console.log(!validate("a2.d412"), "a2.d412 - Expected false");
console.log(!validate("JHD5FJ53"), "JHD5FJ53 - Expected false");
console.log(!validate("!fdjn345"), "!fdjn345 - Expected false");
console.log(!validate("jfkdfj3j"), "jfkdfj3j - Expected false");
console.log(!validate("123"), "123 - Expected false");
console.log(!validate("abc"), "abc - Expected false");
console.log(validate("Password123"), "Password123 - Expected true");
