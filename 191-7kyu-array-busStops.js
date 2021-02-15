var number = function (busStops) {
  let totalPpl = 0;

  for (let i = 0; i < busStops.length; i++) {
    let currStop = busStops[i];
    let getOn = currStop[0];
    let getOff = currStop[1];

    totalPpl += getOn;
    totalPpl -= getOff;
  }

  return totalPpl;
};

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ]),
  5
);
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ]),
  17
);
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 8],
    [12, 2],
    [6, 1],
    [7, 8],
  ]),
  21
);
