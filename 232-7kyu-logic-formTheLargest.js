function maxNumber(n) {
  //your code here
  const str = String(n);
  const arr = str.split("");

  arr.sort((a, b) => b - a);
  const res = arr.join("");
  return parseInt(res);
}

console.log(maxNumber(213), 321);
console.log(maxNumber(7389), 9873);
console.log(maxNumber(63792), 97632);
console.log(maxNumber(566797), 977665);
console.log(maxNumber(1000000), 1000000);
