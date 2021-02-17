function rgb(r, g, b) {
  // complete this function
  function decToHex(c) {
    if (c > 255) return "FF";
    else if (c < 0) return "00";
    else return c.toString(16).padStart(2, "0").toUpperCase();
  }
  return decToHex(r) + decToHex(g) + decToHex(b);
}

console.log(rgb(0, 0, 0), "000000");
console.log(rgb(0, 0, -20), "000000");
console.log(rgb(300, 255, 255), "FFFFFF");
console.log(rgb(173, 255, 47), "ADFF2F");
