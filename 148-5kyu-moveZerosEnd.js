var moveZeros = function (arr) {
  // TODO: Program me
  var zeroCount = 0;
  const movedZeros = arr.reduce((movedZeros, value, index) => {
    if (value !== 0) {
      movedZeros[index - zeroCount] = value;
    } else {
      zeroCount++;
    }
    return movedZeros;
  }, new Array(arr.length));
  movedZeros.fill(
    0,
    movedZeros.length - zeroCount,
    movedZeros.length + zeroCount
  );
  return movedZeros;
};

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
console.log(moveZeros([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]));
