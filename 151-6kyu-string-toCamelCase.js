function toCamelCase(str) {
  return str.split(/-|_/g).reduce((camelCase, word, index) => {
    return index === 0
      ? word
      : camelCase + word[0].toUpperCase() + word.slice(1);
  }, "");
}

function toCamelCase1(str) {
  let strArray;

  if (str === "") {
    return "";
  }

  if (str.indexOf("-") !== -1) {
    strArray = str.split("-");
  } else {
    strArray = str.split("_");
  }

  let ccString = strArray[0];

  for (let i = 1; i < strArray.length; i++) {
    ccString += capitalize(strArray[i]);
  }

  return ccString;
}

let capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

console.log(
  toCamelCase(""),
  "",
  "An empty string was provided but not returned"
);
console.log(
  toCamelCase("the_stealth_warrior"),
  "theStealthWarrior",
  "toCamelCase('the_stealth_warrior') did not return correct value"
);
console.log(
  toCamelCase("The-Stealth-Warrior"),
  "TheStealthWarrior",
  "toCamelCase('The-Stealth-Warrior') did not return correct value"
);
console.log(
  toCamelCase("A-B-C"),
  "ABC",
  "toCamelCase('A-B-C') did not return correct value"
);

// 2. solution
console.log(
  toCamelCase1(""),
  "",
  "An empty string was provided but not returned"
);
console.log(
  toCamelCase1("the_stealth_warrior"),
  "theStealthWarrior",
  "toCamelCase('the_stealth_warrior') did not return correct value"
);
console.log(
  toCamelCase1("The-Stealth-Warrior"),
  "TheStealthWarrior",
  "toCamelCase1('The-Stealth-Warrior') did not return correct value"
);
console.log(
  toCamelCase1("A-B-C"),
  "ABC",
  "toCamelCase1('A-B-C') did not return correct value"
);
