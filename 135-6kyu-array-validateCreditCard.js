function validate(n) {
  let digits = n.toString().split("").map(Number);
  // even number
  if (digits.length % 2 === 0) {
    digits = digits.map((digit, idx) => (idx % 2 === 0 ? digit * 2 : digit));
  } else {
    digits = digits.map((digit, idx) => (idx % 2 === 1 ? digit * 2 : digit));
  }

  // double digits
  digits = digits.map((digit) => (digit > 9 ? digit - 9 : digit));

  let sum = digits.reduce((acc, digit) => (acc += digit), 0);
  return sum % 10 === 0;
}

console.log(validate(123), false);
console.log(validate(1), false);
console.log(validate(2121), true);
console.log(validate(1230), true);
