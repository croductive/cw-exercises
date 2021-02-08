// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
  return ages.sort(sortMe).slice(-2);
}

function sortMe(a, b) {
  return a - b;
}
