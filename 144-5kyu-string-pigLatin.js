function pigIt(str) {
  return str
    .split(" ")
    .map(function (element) {
      return element.slice(1) + element.slice(0, 1) + "ay";
    })
    .join(" ");
}

console.log(pigIt("Pig latin is cool"), "igPay atinlay siay oolcay");
console.log(pigIt("This is my string"), "hisTay siay ymay tringsay");
