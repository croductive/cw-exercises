function sum(numbers) {
  let variable = 0;

  for (let i = numbers.length - 1; i >= 0; i--) {
    variable += numbers[i];
  }
  return variable;
}

console.log(sum([]), 0);
console.log(sum([1, 5.2, 4, 0, -1]), 9.2);
