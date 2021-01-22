function removeExclamationMarks(inputString) {
  return inputString.replace(/!+$/, "");
}

console.log(removeExclamationMarks("Hello World!"), "Hello World");
