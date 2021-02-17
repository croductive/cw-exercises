function generateShape(int) {
  let string = "";
  let arr = [];

  for (let i = 0; i < int * int; i++) {
    if (i % int === 0 && i !== 0) {
      string += "\n";
    }
    string += "+";
  }
  return string;
}

console.log(
  generateShape(8),
  "++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++"
);
