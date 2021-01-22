function squareDigits(num) {
  //may the code be with you
  var mojnum = "" + num;
  var novi = "";
  for (var i = 0; i <= mojnum.length - 1; i++) {
    novi += mojnum[i] * mojnum[i];
  }
  return parseInt(novi);
}

console.log(squareDigits(9119), 811181);
