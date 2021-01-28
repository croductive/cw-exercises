function howMuchILoveYou(nbPetals) {
  // your code
  if (nbPetals % 6 == 1) return "I love you";
  if (nbPetals % 6 == 2) return "a little";
  if (nbPetals % 6 == 3) return "a lot";
  if (nbPetals % 6 == 4) return "passionately";
  if (nbPetals % 6 == 5) return "madly";
  if (nbPetals % 6 == 0) return "not at all";
}

console.log(howMuchILoveYou(7), "I love you");
console.log(howMuchILoveYou(3), "a lot");
console.log(howMuchILoveYou(6), "not at all");
