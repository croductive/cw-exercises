function litres(time) {
  var x = Math.floor(time / 2.0);
  return x;
}

function litres1(time) {
  let totalLiters = time * 0.5;
  return Math.floor(totalLiters);
}

console.log(litres(2), 1, "should return 1 litre");
console.log(litres(1.4), 0, "should return 0 litres");
console.log(litres(12.3), 6, "should return 6 litres");
console.log(litres(0.82), 0, "should return 0 litres");
console.log(litres(11.8), 5, "should return 5 litres");
console.log(litres(1787), 893, "should return 893 litres");
console.log(litres(0), 0, "should return 0 litres");

// 2. solution
console.log(litres1(2), 1, "should return 1 litre");
console.log(litres1(1.4), 0, "should return 0 litres");
console.log(litres1(12.3), 6, "should return 6 litres");
console.log(litres1(0.82), 0, "should return 0 litres");
console.log(litres1(11.8), 5, "should return 5 litres");
console.log(litres1(1787), 893, "should return 893 litres");
console.log(litres1(0), 0, "should return 0 litres");
