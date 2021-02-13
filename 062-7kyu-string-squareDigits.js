function squareDigits(num) {
  //may the code be with you
  var mojnum = "" + num;
  var novi = "";
  for (var i = 0; i <= mojnum.length - 1; i++) {
    novi += mojnum[i] * mojnum[i];
  }
  return parseInt(novi);
}

function squareDigits1(num) {
  //may the code be with you
  let strNum = String(num);
  let result = "";

  for (let i = 0; i < strNum.length; i++) {
    let squared = parseInt(strNum[i]) * parseInt(strNum[i]);
    result = result + String(squared);
  }
  return parseInt(result);
}

// 1. solution
console.log(squareDigits(9119), 811181);

// 2. solution
console.log(squareDigits1(9119), 811181);
