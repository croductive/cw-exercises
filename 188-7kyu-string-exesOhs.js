function XO(str) {
  //code here
  let xCount = 0;
  let oCount = 0;

  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letter === "x" || letter === "X") {
      xCount++;
    } else if (letter === "o" || letter === "O") {
      oCount++;
    }
  }

  return xCount === oCount;
}

console.log(XO("xo"), true);
console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);
