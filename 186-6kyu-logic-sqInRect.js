function sqInRect(len, wid) {
  //your code here
  if (len === wid) {
    return null;
  }

  let squares = [];

  while (len !== wid) {
    let smaller = len < wid ? len : wid;
    let bigger = len > wid ? len : wid;

    squares.push(smaller);

    len = smaller;
    wid = bigger - smaller;
  }
  squares.push(len);

  return squares;
}

console.log(sqInRect(5, 5), null);
console.log(sqInRect(5, 3), [3, 2, 1, 1]);
console.log(sqInRect(3, 5), [3, 2, 1, 1]);
console.log(sqInRect(20, 14), [14, 6, 6, 2, 2, 2]);
