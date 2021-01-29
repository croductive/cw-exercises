function average(n) {
  //Good lucl
  if (n.constructor === Array) {
    let a = n.reduce((a, b) => a + b, 0);
    return a / n.length;
  } else return "Incorrect";
}

console.log(average("Hello please let me break your program"), "Incorrect");
console.log(average([70, 70]), 70);
console.log(average([40, 20, 5]), 195 / 9);
