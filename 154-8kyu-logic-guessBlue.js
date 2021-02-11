function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  const numberOfBlue = blueStart - bluePulled;
  const numberOfRed = redStart - redPulled;
  return numberOfBlue / (numberOfBlue + numberOfRed);
}

console.log(guessBlue(5, 5, 2, 3), 0.6);
console.log(guessBlue(5, 7, 4, 3), 0.2);
console.log(guessBlue(12, 18, 4, 6), 0.4);
