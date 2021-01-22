function areYouPlayingBanjo(name) {
  // Implement me
  if (name.charAt(0) == "r" || name.charAt(0) == "R")
    return name + " plays banjo";
  else return name + " does not play banjo";
}

console.log(areYouPlayingBanjo("Martin"), "Martin does not play banjo");
console.log(areYouPlayingBanjo("Rikke"), "Rikke plays banjo");
