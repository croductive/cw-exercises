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

console.log(getMiddle("test"), "es");
console.log(getMiddle("testing"), "t");
console.log(getMiddle("middle"), "dd");
console.log(getMiddle("A"), "A");
