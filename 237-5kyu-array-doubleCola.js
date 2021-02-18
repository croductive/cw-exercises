function whoIsNext(names, n) {
  while (n > names.length) {
    n -= names.length - 1;
    n *= 0.5;
    n = Math.floor(n);
  }
  return names[n - 1];
}

console.log(whoIsNext(names, 1), "Sheldon");
