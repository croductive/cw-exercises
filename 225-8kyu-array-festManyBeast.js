function feast(beast, dish) {
  //your function here
  let result;
  const start = beast[0] === dish[0];
  const end = beast[beast.length - 1] === dish[dish.length - 1];

  result = start && end;
  return result;
}

console.log(feast("great blue heron", "garlic naan"), true);
console.log(feast("chickadee", "chocolate cake"), true);
console.log(feast("brown bear", "bear claw"), false);
