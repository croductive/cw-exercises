<?php

function betterThanAverage($classPoints, $yourPoints) {
  // Your code here
  return array_sum($classPoints)/ count($classPoints) < $yourPoints;
      
}

var_dump(true, betterThanAverage([2, 3], 5));
var_dump(true, betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));
var_dump(true, betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 69));

