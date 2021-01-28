function arrayPlusArray(arr1, arr2) {
  let res = 0;
  for (let i = 0; i < arr1.length; i++) {
    res += arr1[i] + arr2[i];
  }
  return res;
}
