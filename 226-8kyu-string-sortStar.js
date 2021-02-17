function twoSort(s) {
  return s
    .sort((a, b) => (a < b ? -1 : 1))[0]
    .split("")
    .join("***");
}

console.log(
  twoSort([
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ]),
  "b***i***t***c***o***i***n"
);
console.log(
  twoSort([
    "turns",
    "out",
    "random",
    "test",
    "cases",
    "are",
    "easier",
    "than",
    "writing",
    "out",
    "basic",
    "ones",
  ]),
  "a***r***e"
);
