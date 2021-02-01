function transform(array) {
  //do your coding magic here
  var niz = "";
  for (var i = 0; i <= array.length; i++) {
    if (array[i] != undefined) {
      niz += array[i];
    }
  }
  return niz;
}

console.log(transform(["BmX", false, 784]), "BmXfalse784");
