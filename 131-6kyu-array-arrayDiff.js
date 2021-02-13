function arrayDiff(a, b) {
  return a.filter((num) => !b.includes(num));
}

function arrayDiff1(a, b) {
  let unique = [];

  if (a.length === 0) {
    return [];
  }

  for (let i = 0; i < a.length; i++) {
    if (b.indexOf(a[i]) === -1) {
      unique.push(a[i]);
    }
  }

  for (let i = 0; i < b.length; i++) {
    if (a.indexOf(b[i]) === -1) {
      unique.push(b[i]);
    }
  }
  return unique;
}

// 1. solution
console.log(arrayDiff([], [4, 5]), [], "a was [], b was [4,5]");
console.log(arrayDiff([3, 4], [3]), [4], "a was [3,4], b was [3]");
console.log(arrayDiff([1, 8, 2], []), [1, 8, 2], "a was [1,8,2], b was []");

// 2. solution
console.log(arrayDiff1([], [4, 5]), [], "a was [], b was [4,5]");
console.log(arrayDiff1([3, 4], [3]), [4], "a was [3,4], b was [3]");
console.log(arrayDiff1([1, 8, 2], []), [1, 8, 2], "a was [1,8,2], b was []");
