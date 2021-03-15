function lazyChain(arg) {
  let finalValue = arg;
  let chain = {
    invoke,
    value,
  };

  function value() {
    return finalValue;
  }

  function invoke(name, ...args) {
    finalValue = finalValue[name](...args);
    return chain;
  }

  return chain;
}

console.log(
  lazyChain("hello").invoke("toUpperCase").invoke("split", "").value(),
  ["H", "E", "L", "L", "O"]
);
