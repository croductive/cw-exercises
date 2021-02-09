// return masked string
function maskify(cc) {
  return cc
    .split("")
    .map((letter, idx) => (idx < cc.length - 4 ? "#" : letter))
    .join("");
}

console.log(maskify("4556364607935616"), "############5616");
console.log(maskify("1"), "1");
console.log(maskify("11111"), "#1111");
