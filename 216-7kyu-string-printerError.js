function printerError(s) {
  // your code
  let errors = s.split("").reduce((errors, currentLetter) => {
    if (currentLetter < "a" || currentLetter > "m") {
      errors++;
    }
    return errors;
  }, 0);
  return `${errors}/${s.length}`;
}

var s = "aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";
console.log(printerError(s), "3/56");
