function descendingOrder(nn) {
  //...
  var n = nn
    .toString()
    .split("")
    .sort()
    .sort(function (a, b) {
      return b - a;
    })
    .join("")
    .toString();
  return parseInt(n);
}

console.log(descendingOrder(0), 0);
console.log(descendingOrder(1), 1);
console.log(descendingOrder(123456789), 987654321);
