function removeEveryOther(arr) {
  //your code here
  var novi = [];
  for (var i = 0; i < arr.length; i = i + 2) {
    novi.push(arr[i]);
  }
  return novi;
}

function removeEveryOther1(arr) {
  //your code here
  return arr.filter((_, idx) => idx % 2 === 0);
}

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]), [
  "Hello",
  "Hello Again",
]);
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [1, 3, 5, 7, 9]);
console.log(removeEveryOther([[1, 2]]), [[1, 2]]);
console.log(removeEveryOther([["Goodbye"], { Great: "Job" }]), [["Goodbye"]]);

console.log1(removeEveryOther(["Hello", "Goodbye", "Hello Again"]), [
  "Hello",
  "Hello Ag1ain",
]);
console.log1(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [
  1,
  3,
  5,
  7,
  9,
]);
console.log1(removeEveryOther([[1, 2]]), [[1, 2]]);
console.log1(removeEveryOther([["Goodbye"], { Great: "Job" }]), [["Goodbye"]]);
