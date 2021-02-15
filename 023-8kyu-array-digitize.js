function digitize(n) {
  //  return n.toString.split(",");
  return n.toString().split("").reverse().map(Number);
}

function digitize1(num) {
  //code here
  let strNum = num.toString();
  let strNumArr = strNum.split("");
  let digitized = strNumArr.reverse();

  for (let i = 0; i < digitized.length; i++) {
    digitized[i] = parseInt(digitized[i]);
  }
  return digitized;
}

console.log(digitize(35231), [1, 3, 2, 5, 3]);

console.log(digitize1(35231), [1, 3, 2, 5, 3]);
