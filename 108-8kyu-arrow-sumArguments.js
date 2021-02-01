const sum = (...args) => [...args].reduce((a, b) => a + b, 0);

console.log(add(), 0);
console.log(add(2), 2);
console.log(add(1, 1), 2);
console.log(add(1, 2, 3), 6);
console.log(add(-3, -2, -1, 1, 2, 3, 4), 4);
