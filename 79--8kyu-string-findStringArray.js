var find = function (string, array) {
  return array.includes(string);
};

console.log(find("hello", ["bye bye", "hello"]), true);
console.log(find("anything", ["bye bye", "hello"]), false);
