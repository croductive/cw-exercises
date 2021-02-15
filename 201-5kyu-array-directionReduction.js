function dirReduc(arr) {
  // ...
  let str = arr.join("");

  let pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/g;
  while (pattern.test(str)) {
    str = str.replace(pattern, "");
  }
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g) || [];
}

console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]),
  ["WEST"]
);
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), [
  "NORTH",
  "WEST",
  "SOUTH",
  "EAST",
]);
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), []);
