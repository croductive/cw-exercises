<?php
function move($pos, $roll) {
  // your code here
  return $pos+($roll*2);
}

var_dump(8, move(0, 4));
var_dump(15, move(3, 6));
var_dump(12, move(2, 5));

