function pigIt(str) {
  let newArr = [];
  let strArr = str.split(" ");

  strArr.forEach((x) => {
    let wordArr = x.split("");
    wordArr.push(wordArr[0], "ay"), wordArr.shift();

    if (x === "!" || x === "?" || x === ".") {
      newArr.push(x);
    } else {
      newArr.push(wordArr.join(""));
    }
  });
  return newArr.join(" ");
}

console.log(pigIt("Pig latin is cool"), "igPay atinlay siay oolcay");
console.log(pigIt("This is my string"), "hisTay siay ymay tringsay");
