function dice(min, max) {
  var novi = Math.random() * (max - min) + min;
  return Math.round(novi);
}
