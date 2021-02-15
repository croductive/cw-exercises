function narcissistic(value) {
  // Code me to return true or false
  return (
    value
      .toString()
      .split("")
      .reduce((sum, digit, i, { length }) => {
        return sum + Math.pow(digit, length);
      }, 0) == value
  );
}

console.log(narcissistic(7), true, "7 is narcissistic");
console.log(narcissistic(371), true, "371 is narcissistic");
