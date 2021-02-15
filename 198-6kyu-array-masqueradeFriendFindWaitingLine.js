function friendFind(line) {
  //return possible friends
  let count = 0;

  for (let i = 0; i < line.length; i++) {
    if (line[i] === "red") {
      if (redScenario(line[i - 2], line[i - 1], line[i + 1], line[i + 2])) {
        count++;
      }
    }
  }

  return count;
}

function redScenario(color02, color01, color1, color2) {
  if (
    (color02 === "blue" && color01 === "blue") ||
    (color01 === "blue" && color1 === "blue") ||
    (color1 === "blue" && color2 === "blue")
  ) {
    return 1;
  }
  return 0;
}

console.log(friendFind(["blue", "blue", "red", "red", "blue", "green"]), 1);
console.log(
  friendFind(["blue", "red", "blue", "blue", "red", "blue", "red"]),
  2
);
console.log(friendFind(["brown", "brown", "red", "green"]), 0);
console.log(friendFind(["red", "blue", "blue", "red"]), 2);
console.log(friendFind(["red", "blue"]), 0);
console.log(
  friendFind(["blue", "green", "red", "green", "blue", "blue", "red"]),
  1
);
console.log(
  friendFind(["blue", "blue", "blue", "blue", "blue", "blue", "blue"]),
  0
);
console.log(
  friendFind(["blue", "red", "blue", "red", "red", "blue", "red"]),
  1
);
