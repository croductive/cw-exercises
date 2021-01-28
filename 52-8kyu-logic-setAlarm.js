function setAlarm(employed, vacation) {
  if (employed && !vacation) return true;
  else return false;
}

console.log(!setAlarm(true, true), "Should be false.");
console.log(!setAlarm(false, true), "Should be false.");
console.log(setAlarm(true, false), "Should be true.");
