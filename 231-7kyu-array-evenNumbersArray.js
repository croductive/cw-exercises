function evenNumbers(array, number) {
  // good luck
  const result = [];
  for (let i = 0; i <= array.length; i++) {
    if (array[i] % 2 === 0) result.push(array[i]);
  }
  return result.splice(result.length - number, number);
}

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [
  -8,
  26,
]);
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6]);
