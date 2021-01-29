function digitize(n) {
  //  return n.toString.split(",");
  return n.toString().split("").reverse().map(Number);
}

console.log(digitize(35231), [1, 3, 2, 5, 3]);
