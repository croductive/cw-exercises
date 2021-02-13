function extractMiddle(str) {
  var position;
  var length;

  if (str.length % 2 == 1) {
    position = str.length / 2;
    length = 1;
  } else {
    position = str.length / 2 - 1;
    length = 2;
  }

  return str.substring(position, position + length);
}

function getMiddle(str) {
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
