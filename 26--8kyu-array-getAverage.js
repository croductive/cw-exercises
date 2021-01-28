function getAverage(marks) {
  // calculates total number of marks
  var total = 0;
  for (var i = 0; i < marks.length; i++) {
    total += marks[i];
  }

  return Math.floor(total / marks.length);
}

// tests
console.log(getAverage([2, 2, 2, 2]), 2);
console.log(getAverage([1, 2, 3, 4, 5]), 3);
console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2]), 1);
