function correct(string) {
  // your code here
  string = string.replace(/5/g, "S");
  string = string.replace(/0/g, "O");
  string = string.replace(/1/g, "I");

  return string;
}

console.log(correct("L0ND0N"), "LONDON");
console.log(correct("DUBL1N"), "DUBLIN");
console.log(correct("51NGAP0RE"), "SINGAPORE");
console.log(correct("BUDAPE5T"), "BUDAPEST");
console.log(correct("PAR15"), "PARIS");
