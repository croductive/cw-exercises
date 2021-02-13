function DNAStrand(dna) {
  //your code here
  let dnaKey = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };

  let compSide = "";

  for (let i = 0; i < dna.length; i++) {
    compSide += dnaKey[dna[i]];
  }

  return compSide;
}

console.log(DNAStrand("AAAA"), "TTTT", "String AAAA is");
console.log(DNAStrand("ATTGC"), "TAACG", "String ATTGC is");
console.log(DNAStrand("GTAT"), "CATA", "String GTAT is");
