var countSheep = function (num) {
  var niz = "";
  for (var i = 1; i <= num; i++) {
    niz += i + " sheep...";
  }
  return niz;
};

console.log(countSheep(1), "1 sheep...");
console.log(countSheep(2), "1 sheep...2 sheep...");
console.log(countSheep(3), "1 sheep...2 sheep...3 sheep...");
