function isNarcissistic(value) {
  //your code here
  const length = Math.floor(Math.log10(Math.abs(value))) + 1;

  let sum = 0;
  let digits = value;

  while (digits > 0) {
    const digit = digits % 10;
    sum += Math.pow(digit, length);
    digits = Math.floor(digits / 10);
  }
  return sum == value;
}

console.log(isNarcissistic(153), true);
console.log(isNarcissistic(1), true);
console.log(isNarcissistic(435), false);
console.log(isNarcissistic(370), true);
console.log(isNarcissistic(324), false);
console.log(isNarcissistic(371), true);
console.log(isNarcissistic(4328), false);
console.log(isNarcissistic(407), true);
console.log(isNarcissistic(3248), false);
console.log(isNarcissistic(1634), true);
console.log(isNarcissistic(8208), true);
console.log(isNarcissistic(9474), true);
console.log(isNarcissistic(54748), true);
console.log(isNarcissistic(92727), true);
console.log(isNarcissistic(93084), true);
console.log(isNarcissistic(548834), true);
console.log(isNarcissistic(1741725), true);
console.log(isNarcissistic(4210818), true);
console.log(isNarcissistic(9800817), true);
console.log(isNarcissistic(234229983), false);
console.log(isNarcissistic(9926315), true);
console.log(isNarcissistic(24678050), true);
console.log(isNarcissistic(88593477), true);
console.log(isNarcissistic(11513221922401), false);
console.log(isNarcissistic(146511208), true);
console.log(isNarcissistic(472335975), true);
console.log(isNarcissistic(26548238692458), false);
console.log(isNarcissistic(534494836), true);
console.log(isNarcissistic(912985153), true);
console.log(isNarcissistic(4679307774), true);
