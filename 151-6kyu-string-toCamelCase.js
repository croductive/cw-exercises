function toCamelCase(str) {
  return str.split(/-|_/g).reduce((camelCase, word, index) => {
    return index === 0
      ? word
      : camelCase + word[0].toUpperCase() + word.slice(1);
  }, "");
}

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
