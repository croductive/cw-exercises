function friend(friends) {
  //your code here
  var niz = [];
  for (var i = 0; i <= friends.length - 1; i++) {
    if (friends[i].length == 4) {
      niz.push(friends[i]);
    }
  }
  return niz;
}

console.log(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]);
console.log(friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]);
console.log(
  friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]),
  ["Jimm", "Cari", "aret"]
);
console.log(friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"]);
