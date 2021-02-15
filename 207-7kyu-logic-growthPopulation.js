function nbYear(p0, percent, aug, p) {
  // your code
  const getNextPopulation = (current) =>
    current + (current * percent) / 100 + aug;

  if (p0 < p) {
    const nextPopulation = getNextPopulation(p0);
    return 1 + nbYear(nextPopulation, percent, aug, p);
  }
  return 0;
}

console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);
