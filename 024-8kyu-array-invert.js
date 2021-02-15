function invert(array) {
  var arrayI = [];
  for (var i = 0; i <= array.length - 1; i++) {
    arrayI.push(-1 * array[i]);
  }
  return arrayI;
}

function invert1(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 0) {
      newArr.push(0);
    } else {
      let temp = array[i] * -1;
      newArr.push(temp);
    }
  }
  return newArr;
}

console.log(invert([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
console.log(invert([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
console.log(invert([]), []);
console.log(invert([0]), [0]);

// 2. solution
console.log(invert1([1, 2, 3, 4, 5]), [-1, -2, -3, -4, -5]);
console.log(invert1([1, -2, 3, -4, 5]), [-1, 2, -3, 4, -5]);
console.log(invert1([]), []);
console.log(invert1([0]), [0]);
