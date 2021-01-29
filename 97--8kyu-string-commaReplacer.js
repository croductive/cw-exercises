function commaReplacer(str) {
  return str.replace(/[ ,]+/g, " ");
}

console.log(commaReplacer("My,name,is,Jon"), "My name is Jon");
