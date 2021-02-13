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

function descendingOrder1(n) {
  //...
  return parseInt(
    String(n)
      .split("")
      .sort((a, b) => a - b)
      .reverse()
      .join("")
  );
}

// 1. solution
console.log(descendingOrder(0), 0);
console.log(descendingOrder(1), 1);
console.log(descendingOrder(123456789), 987654321);

// 2. solution
console.log(descendingOrder1(0), 0);
console.log(descendingOrder1(1), 1);
console.log(descendingOrder1(123456789), 987654321);
