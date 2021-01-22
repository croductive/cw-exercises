function removeExclamationMarks(inputString) {
  return inputString.replace(/!/g, "");
}

console.log(removeExclamationMarks("Hello World!"), "Hello World");
