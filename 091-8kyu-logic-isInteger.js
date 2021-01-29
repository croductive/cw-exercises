function summation(n) {
  //your code here - return "Invalid Value" if x is not an integer
  if (Number.isInteger(n)) {
    return (n * (n + 1)) / 2;
  } else return "Invalid Value";
}

console.log(summation(10), 55);
console.log(summation(5), 15);
console.log(summation("538"), "Invalid Value");
console.log(summation(67.9), "Invalid Value");
