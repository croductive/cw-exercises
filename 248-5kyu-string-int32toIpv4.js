function int32ToIp(int32) {
  const binaryString = int32.toString(2).padStart(32, "0");
  const octets = [];

  for (let i = 0; i <= 24; i += 8) {
    octets.push(parseInt(binaryString.slice(i, i + 8), 2));
  }
  return octets.join(".");
}

console.log(
  int32ToIp(2154959208),
  "128.114.17.104",
  "wrong ip for interger: 2154959208"
);
console.log(int32ToIp(0), "0.0.0.0", "wrong ip for integer: 0");
console.log(
  int32ToIp(2149583361),
  "128.32.10.1",
  "wrong ip for integer: 2149583361"
);
