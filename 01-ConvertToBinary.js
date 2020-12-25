String.prototype.toInt = function (returnval) {
  var i = parseInt(this);
  return isNaN(i) ? (returnval !== undefined ? returnval : -1) : i;
};

function toBinary(n) {
  this.n = n;
  return (n >>> 0).toString(2).toInt();
}

console.log(toBinary(1), 1);
console.log(toBinary(2), 10);
console.log(toBinary(3), 11);
console.log(toBinary(5), 101);
