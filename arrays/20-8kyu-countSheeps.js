////////////
//  loop  //
////////////
function countSheeps(arrayOfSheep) {
  var count = 0;
  for (var i = 0; i <= arrayOfSheep.length - 1; i++) {
    if (arrayOfSheep[i] == true) {
      count = count + 1;
    }
  }
  return count;
}

var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

console.log(countSheeps(array1) == 17, "There are 17 sheeps in total");

/////////////
// filter  //
// //////////

function countSheeps2(arr) {
  return arr.filter(Boolean).length;
}

console.log(countSheeps2(array1) == 17, "There are 17 sheeps in total");

//////////////
// map      //
// ///////////
function countSheeps3(arrayOfSheep) {
  var count = 0;
  arrayOfSheep.map(function (current) {
    if (current) {
      count += 1;
    }
  });
  return count;
}

console.log(countSheeps3(array1) == 17, "There are 17 sheeps in total");
