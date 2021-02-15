function duplicateCount(text) {
  //...
  const counts = {};
  const duplicates = {};
  let numDuplicates = 0;

  for (let i = 0; i < text.length; i++) {
    const letter = text[i].toLowerCase();
    counts[letter] = counts[letter] || 0;
    counts[letter]++;

    if (counts[letter] > 1 && !duplicates[letter]) {
      numDuplicates++;
      duplicates[letter] = true;
    }
  }
  return numDuplicates;
}

console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2, "should ignore case");
console.log(duplicateCount("Indivisibility"), 1);
console.log(
  duplicateCount("Indivisibilities"),
  2,
  "characters may not be adjacent"
);
