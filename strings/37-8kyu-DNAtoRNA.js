function DNAtoRNA(dna) {
  // create a function which returns an RNA sequence from the given DNA sequence
  var dna1 = [];
  for (var i = 0; i <= dna.length - 1; i++) {
    if (dna[i] == "T") {
      dna1.push("U");
    } else {
      dna1.push(dna[i]);
    }
  }
  return dna1.join("");
}

console.log(DNAtoRNA("TTTT"), "UUUU");
console.log(DNAtoRNA("GCAT"), "GCAU");
console.log(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC");
