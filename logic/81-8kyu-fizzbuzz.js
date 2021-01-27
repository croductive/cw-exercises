let fizzbuzz = (n) => {
  if (n % 3 === 0 && n % 5 === 0) {
    return "fizz buzz";
  } else if (n % 3 === 0) {
    return "fizz";
  } else if (n % 5 === 0) {
    return "buzz";
  } else return n;
};

console.log(fizzbuzz(2), 2, "Wrong output with input 2");
console.log(fizzbuzz(4), 4, "Wrong output with input 4");
console.log(fizzbuzz(3), "fizz", "Wrong output with input 3");
console.log(fizzbuzz(15), "fizz buzz", "Wrong output with input 15");
console.log(fizzbuzz(20), "buzz", "Wrong output with input 20");
