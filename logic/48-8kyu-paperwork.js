function paperwork(n, m) {
  if (n < 0 || m < 0) return 0;
  if (n >= 0 && m >= 0) return m * n;
}
console.log(paperwork(5, 5), 25, "Failed at paperwork(5, 5)");
