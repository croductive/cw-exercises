function count(string) {
  // The function code should be here
  const count = {};

  string.split("").forEach((char) => {
    count[char] = count[char] ? count[char] + 1 : 1;
  });

  return count;
}

console.log(count("aba"), { a: 2, b: 1 });
console.log(count(""), {});
