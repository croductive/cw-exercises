var uniqueInOrder = function (iterable) {
  //your code here - remember iterable can be a string or an array
  let newArr = [];

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] != iterable[i + 1]) {
      newArr.push(iterable[i]);
    }
  }
  return newArr;
};

var uniqueInOrder1 = function (iterable) {
  //your code here - remember iterable can be a string or an array
  let uniques = [];

  for (let i = 0; i < iterable.length; i++) {
    let curr = iterable[i];
    let next = iterable[i + 1];

    if (curr != next) {
      uniques.push(curr);
    }
  }
  return uniques;
};

console.log(uniqueInOrder("AAAABBBCCDAABBB"), ["A", "B", "C", "D", "A", "B"]);

console.log(uniqueInOrder1("AAAABBBCCDAABBB"), ["A", "B", "C", "D", "A", "B"]);
