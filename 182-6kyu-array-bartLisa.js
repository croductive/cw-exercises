function list(names) {
  //your code here
  let result = "";
  let comma = ", ";
  let end = " & ";

  while (names.length) {
    result += names.shift().name;
    if (names.length == 1) {
      result += end;
    } else if (names.length > 1) {
      result += comma;
    }
  }
  return result;
}

console.log(
  list([
    { name: "Bart" },
    { name: "Lisa" },
    { name: "Maggie" },
    { name: "Homer" },
    { name: "Marge" },
  ]),
  "Bart, Lisa, Maggie, Homer & Marge",
  "Must work with many names"
);
console.log(
  list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]),
  "Bart, Lisa & Maggie",
  "Must work with many names"
);
console.log(
  list([{ name: "Bart" }, { name: "Lisa" }]),
  "Bart & Lisa",
  "Must work with two names"
);
console.log(list([{ name: "Bart" }]), "Bart", "Wrong output for a single name");
console.log(list([]), "", "Must work with no names");
