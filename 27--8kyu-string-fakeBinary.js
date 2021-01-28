function fakeBin(str) {
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    if (Number(str[i]) >= 5) {
      newStr += "1";
    } else {
      newStr += "0";
    }
  }
  return newStr;
}

function fakeBin2(x) {
  return x.replace(/\d/g, (d) => (d < 5 ? 0 : 1));
}
