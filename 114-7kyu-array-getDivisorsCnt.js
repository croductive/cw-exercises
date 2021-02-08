function getDivisorsCnt(n) {
  // todo
  const res = [];
  for (let i = 0; i <= n; i++) {
    if (n % i === 0) res.push(i);
  }
  return res.length;
}

console.log(getDivisorsCnt(1), 1);
console.log(getDivisorsCnt(10), 4);
console.log(getDivisorsCnt(11), 2);
console.log(getDivisorsCnt(54), 8);
