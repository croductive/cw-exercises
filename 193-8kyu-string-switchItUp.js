function switchItUp(number) {
  //Write your own Code!
  let strNum = "";

  switch (number) {
    case 0:
      strNum = "Zero";
      break;
    case 1:
      strNum = "One";
      break;
    case 2:
      strNum = "Two";
      break;
    case 3:
      strNum = "Three";
      break;
    case 4:
      strNum = "Four";
      break;
    case 5:
      strNum = "Five";
      break;
    case 6:
      strNum = "Six";
      break;
    case 7:
      strNum = "Seven";
      break;
    case 8:
      strNum = "Eight";
      break;
    case 9:
      strNum = "Nine";
      break;
  }
  return strNum;
}

console.log(switchItUp(1), "One");
console.log(switchItUp(3), "Three");
console.log(switchItUp(5), "Five");
