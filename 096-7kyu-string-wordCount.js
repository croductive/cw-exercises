// Steps to follow
// We know that a sentence or a phrase is made up of words that are separated with spaces in between and there are some instances in which the words are separated by 2 or more spaces. A developer must notice all these points while calculating no of words.
//
// Step-1
// Exclude the start and end spaces of a string. The following line of regex expression will remove the start and end spaces of the given string.
//
// str.replace(/(^\s*)|(\s*$)/gi,"");
// Step-2
// Try to reduce multiple spaces to a single space.
//
// str.replace(/[ ]{2,}/gi," ");
// Step-3
// Try to exclude a new line with a start spacing.
//
// str.replace(/\n /,"\n");
// After performing all the above mention steps we will have a string with a single spaced words. On splitting the resulted string using split() method the words are going to join by a comma instead of spaces. Now using length() method we can get the resulted word count as shown in the following example.

function wordCount(str) {
  str = str.replace(/(^\s*)|(\s*$)/gi, "");
  str = str.replace(/[ ]{2,}/gi, " ");
  str = str.replace(/\n /, "\n");
  return str.split(" ").length;
}

console.log(wordCount("Everything is hard before it is easy."), 7);
console.log(
  wordCount(
    " We are what we repeatedly do; excellence, then, is not an act but a habit."
  ),
  15
);
console.log(wordCount("May the force be with you. "), 6);
