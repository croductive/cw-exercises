<?php

function countPositivesSumNegatives($input) {
  $result = [0,0];
  if($input) {
    for($i =0; $i < sizeof($input); $i++){
     $input[$i]>0?$result[0]++ : $result[1] +=$input[$i]; 
    }
    return $result;
  }
  else {return array();}
}

var_dump([10, -65], countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
var_dump([8, -50], countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));
