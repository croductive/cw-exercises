function titleCase(title, minorWords) {
  if (title.length === 0) {
    return "";
  }
  let minorArray;

  if (minorWords) {
    minorArray = minorWords.toLowerCase().split(" ");
  } else {
    minorArray = [];
  }

  let titleArray = title.toLowerCase().split(" ");

  titleArray[0] = capitalize(titleArray[0]);

  for (let i = 1; i < titleArray.length; i++) {
    if (minorArray.indexOf(titleArray[i]) === -1) {
      titleArray[i] = capitalize(titleArray[i]);
    }
  }

  return titleArray.join(" ");
}

let capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

console.log(titleCase(""), "");
console.log(titleCase("a clash of KINGS", "a an the of"), "A Clash of Kings");
console.log(
  titleCase("THE WIND IN THE WILLOWS", "The In"),
  "The Wind in the Willows"
);
console.log(titleCase("the quick brown fox"), "The Quick Brown Fox");
