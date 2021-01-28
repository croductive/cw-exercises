function addWord(array, string) {
  // ...
  array.push(string);
  return array;
}

var list = [];
addWord(list, "hello");
console.log(list, ["hello"], 'list should be ["hello"]');
addWord(addWord(list, "how are you"), "goodbye");
console.log(
  list,
  ["hello", "how are you", "goodbye"],
  'list should be ["hello","how are you","goodbye"]'
);
