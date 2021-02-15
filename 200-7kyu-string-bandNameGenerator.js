function bandNameGenerator(str) {
  // Happy coding
  if (str[0] === str[str.length - 1]) {
    return double(str);
  } else {
    return addThe(str);
  }
}

let addThe = (noun) => {
  return "The " + noun.slice(0, 1).toUpperCase() + noun.slice(1);
};

let double = (noun) => {
  return noun.slice(0, 1).toUpperCase() + noun.slice(1) + noun.slice(1);
};

console.log(bandNameGenerator("knife"), "The Knife");
console.log(bandNameGenerator("tart"), "Tartart");
console.log(bandNameGenerator("sandles"), "Sandlesandles");
console.log(bandNameGenerator("bed"), "The Bed");
