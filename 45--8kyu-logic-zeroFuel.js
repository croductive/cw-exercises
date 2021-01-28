const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  if (fuelLeft * mpg >= distanceToPump) return true;
  if (fuelLeft * mpg < distanceToPump) return false;
};

console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);
