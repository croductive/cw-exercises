function removeO(string) {
  return string.replace(/\o+/g, "");
}

console.log(
  removeO("hello world") == "hell wrld",
  "removeO did not work properly"
);
console.log(removeO("bono") == "bn", "removeO did not work properly");
