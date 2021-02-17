var capitals = function (word) {
  // Write your code here
  return Array.prototype.reduce.call(
    word,
    (indices, letter, i) => {
      if (letter.match(/[A-Z]/)) {
        indices.push(i);
      }
      return indices;
    },
    []
  );
};

console.log(capitals("CodEWaRs"), [0, 3, 4, 6]);
