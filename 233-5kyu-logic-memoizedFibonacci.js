const fibonacci = (() => {
  const cache = { 0: 0, 1: 1 };
  return (n) => {
    if (n in cache) return cache[n];
    cache[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return cache[n];
  };
})();

console.log(fibonacci(70), 190392490709135);
console.log(fibonacci(60), 1548008755920);
console.log(fibonacci(50), 12586269025);
