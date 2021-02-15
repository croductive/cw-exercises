function productFib(prod, fibs = [0, 1]) {
  // ...
  let check = checkProd(fibs, prod);

  if (check === "match") {
    return [fibs[fibs.length - 2], fibs[fibs.length - 1], true];
  } else if (check === "over") {
    return [fibs[fibs.length - 2], fibs[fibs.length - 1], false];
  } else {
    fibs = addFib(fibs);
    return productFib(prod, fibs);
  }
}

function checkProd(fibs, prod) {
  let fib1 = fibs[fibs.length - 2];
  let fib2 = fibs[fibs.length - 1];
  let trueProd = fib1 * fib2;

  if (trueProd === prod) {
    return "match";
  } else if (trueProd > prod) {
    return "over";
  }
  return;
}

function addFib(fibs) {
  let num1 = fibs[fibs.length - 2];
  let num2 = fibs[fibs.length - 1];

  fibs.push(num1 + num2);
  return fibs;
}

console.log(productFib(4895), [55, 89, true]);
console.log(productFib(5895), [89, 144, false]);
console.log(productFib(74049690), [6765, 10946, true]);
console.log(productFib(84049690), [10946, 17711, false]);
console.log(productFib(193864606), [10946, 17711, true]);
console.log(productFib(447577), [610, 987, false]);
console.log(productFib(602070), [610, 987, true]);
