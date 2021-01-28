function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  var avg = 0;
  var sum = 0;
  for (var i = 0; i < classPoints.length; i++) {
    sum += classPoints[i];
    avg = sum / classPoints.length;
  }
  if (yourPoints >= avg) return true;
  if (yourPoints < avg) return false;
}

console.log(betterThanAverage([2, 3], 5), true);
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75), true);
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), false);
