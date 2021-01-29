function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  var a = Math.sqrt(sq);

  if (Number.isInteger(a)) return (a + 1) * (a + 1);
  return -1;
}
console.log(findNextSquare(121), 144, "Wrong output for 121");
console.log(findNextSquare(625), 676, "Wrong output for 625");
console.log(findNextSquare(319225), 320356, "Wrong output for 319225");
console.log(
  findNextSquare(15241383936),
  15241630849,
  "Wrong output for 15241383936"
);
