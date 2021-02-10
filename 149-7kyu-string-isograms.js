function isIsogram(str) {
  //...
  const counts = {};

  for (let i = 0; i < str.length; i++) {
    const letter = str[i].toLowerCase();
    if (!counts[letter]) {
      counts[letter] = 1;
    } else {
      return false;
    }
  }
  return true;
}

function isIsogram1(str) {
  return !/(\w).*\1/i.test(str);
}

console.log(isIsogram("Dermatoglyphics"), true);
console.log(isIsogram("isogram"), true);
console.log(isIsogram("aba"), false, "same chars may not be adjacent");
console.log(isIsogram("moOse"), false, "same chars may not be same case");
console.log(isIsogram("isIsogram"), false);
console.log(isIsogram(""), true, "an empty string is a valid isogram");

console.log(isIsogram1("Dermatoglyphics"), true);
console.log(isIsogram1("isogram"), true);
console.log(isIsogram1("aba"), false, "same chars may not be adjacent");
console.log(isIsogram1("moOse"), false, "same chars may not be same case");
console.log(isIsogram1("isIsogram"), false);
console.log(isIsogram1(""), true, "an empty string is a valid isogram");
