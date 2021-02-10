decodeMorse = function (morseCode) {
  //your code here
  return morseCode
    .split("   ")
    .map((word) => {
      return word.split(" ").reduce((word, code) => {
        return word + (MORSE_CODE[code] || "");
      }, "");
    })
    .join(" ")
    .trim();
};

console.log(decodeMorse(".... . -.--   .--- ..- -.. ."), "HEY JUDE");
