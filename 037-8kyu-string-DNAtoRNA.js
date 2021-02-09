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

function DNAtoRNA1(dna) {
  // create a function which returns an RNA sequence fro
  return dna.replace(/T/g, "U");
}

console.log(DNAtoRNA("TTTT"), "UUUU");
console.log(DNAtoRNA("GCAT"), "GCAU");
console.log(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC");

console.log1(DNAtoRNA("TTTT"), "UUUU");
console.log1(DNAtoRNA("GCAT"), "GCAU");
console.log1(DNAtoRNA("GACCGCCGCC"), "GACCGCCGCC");
