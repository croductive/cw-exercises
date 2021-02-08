function toWeirdCase(string) {
  return string
    .split(" ")
    .map((words) => words.split("").map(mapToWeird).join(""))
    .join(" ");
}

function mapToWeird(l, i) {
  return i % 2 === 0 ? l.toUpperCase() : l.toLowerCase();
}

console.log(toWeirdCase("This"), "ThIs");
console.log(toWeirdCase("is"), "Is");
console.log(toWeirdCase("This is a test"), "ThIs Is A TeSt");
