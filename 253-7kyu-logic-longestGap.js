function gap(num) {
  let longestSegment = 0;
  let currentLongestSegment = 0;

  for (let i = 0; i < 32; i++) {
    const bit = (num >>> i) & 1;
    if (bit == 1) {
      if (currentLongestSegment > longestSegment) {
        longestSegment = currentLongestSegment;
      }
      currentLongestSegment = 0;
    } else {
      currentLongestSegment += 1;
    }
  }

  return longestSegment;
}

console.log(gap(9), 2);
console.log(gap(529), 4);
console.log(gap(20), 1);
console.log(gap(15), 0);
