function toUnderscore(string) {
  if (typeof string !== "string") return string.toString();
  return string
    .replace(/([A-Z])/g, "_$1")
    .toLowerCase()
    .slice(1);
}
