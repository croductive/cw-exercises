const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

function isPrime1(num) {
  // returns boolean
  if (num <= 1) return false; // negatives
  if (num % 2 == 0 && num > 2) return false; // even numbers
  const s = Math.sqrt(num); // store the square to loop faster
  for (let i = 3; i <= s; i += 2) {
    // start from 3, stop at the square, increment in twos
    if (num % i === 0) return false; // modulo shows a divisor was found
  }
  return true;
}

console.log(isPrime(0), false, "0 is not prime");
console.log(isPrime(1), false, "1 is not prime");
console.log(isPrime(2), true, "2 is prime");
console.log(isPrime(73), true, "73 is prime");
console.log(isPrime(75), false, "75 is not prime");
console.log(isPrime(-1), false, "-1 is not prime");

console.log(isPrime1(0), false, "0 is not prime");
console.log(isPrime1(1), false, "1 is not prime");
console.log(isPrime1(2), true, "2 is prime");
console.log(isPrime1(73), true, "73 is prime");
console.log(isPrime1(75), false, "75 is not prime");
console.log(isPrime1(-1), false, "-1 is not prime");
