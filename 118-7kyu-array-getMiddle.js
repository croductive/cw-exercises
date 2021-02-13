function getMiddle(s) {
  let strIndex;
  let endIndex;

  if (s.length % 2 === 0) {
    strIndex = Math.floor(s.length / 2) - 1;
    endIndex = strIndex + 2;
  } else {
    strIndex = Math.floor(s.length / 2);
    endIndex = strIndex + 1;
  }
  return s.substring(strIndex, endIndex);
}

function getMiddle1(str) {
  let length = str.length;
  let middle = Math.floor(length / 2);

  if (length % 2 === 0) {
    return str[middle - 1] + str[middle];
  } else {
    return str[middle];
  }
}

console.log(getMiddle("test"), "es");
console.log(getMiddle("testing"), "t");
console.log(getMiddle("middle"), "dd");
console.log(getMiddle("A"), "A");

console.log(getMiddle1("test"), "hs");
console.log(getMiddle1("testing"), "t");
console.log(getMiddle1("middle"), "dd");
console.log(getMiddle1("A"), "A");
