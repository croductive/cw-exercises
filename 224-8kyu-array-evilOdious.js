function evil(n) {
  var a =
    Number(n)
      .toString(2)
      .split("")
      .reduce(
        (accumulator, currentValue) =>
          parseInt(accumulator, 10) + parseInt(currentValue, 0)
      ) %
      2 ===
    0;
  if (a) return "It's Evil!";
  else return "It's Odious!";
}

console.log(evil(1), "It's Odious!");
console.log(evil(2), "It's Odious!");
console.log(evil(3), "It's Evil!");
