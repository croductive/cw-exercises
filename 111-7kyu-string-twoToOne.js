function longest(s1, s2) {
  // your code
  return [...new Set((s1 + s2).split(""))].sort().join("");
}

console.log(longest("aretheyhere", "yestheyarehere"), "aehrsty");
console.log(
  longest("loopingisfunbutdangerous", "lessdangerousthancoding"),
  "abcdefghilnoprstu"
);
console.log(
  longest("inmanylanguages", "theresapairoffunctions"),
  "acefghilmnoprstuy"
);
