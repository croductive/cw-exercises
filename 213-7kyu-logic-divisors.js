function divisors(number) {
  const results = [];
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      results.push(i);
    }
  }
  if (results.length == 0) {
    return number + " is prime";
  }
  return results;
}

console.log(divisors(15), [3, 5]);
console.log(divisors(12), [2, 3, 4, 6]);
console.log(divisors(13), "13 is prime");
