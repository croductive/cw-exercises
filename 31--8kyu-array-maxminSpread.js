var min = function (list) {
  return Math.min(...list);
};

var max = function (list) {
  return Math.max(...list);
};

//reduce
const min1 = (list) =>
  list.reduce((min_val, val) => (min_val <= val ? min_val : val));
const max1 = (list) =>
  list.reduce((max_val, val) => (max_val > val ? max_val : val));

console.log(min([-52, 56, 30, 29, -54, 0, -110]), -110);
console.log(min([42, 54, 65, 87, 0]), 0);
console.log(max([4, 6, 2, 1, 9, 63, -134, 566]), 566);
console.log(max([5]), 5);

console.log(min1([-52, 56, 30, 29, -54, 0, -110]), -110);
console.log(min1([42, 54, 65, 87, 0]), 0);
console.log(max1([4, 6, 2, 1, 9, 63, -134, 566]), 566);
console.log(max1([5]), 5);
