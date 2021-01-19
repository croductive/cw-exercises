const reverseSeq = n => {
  var niz=[]
  for(var i =n; i>0;i--){
    niz.push(i) 
  }
  
  return niz
};

console.log(reverseSeq(5), [5, 4, 3, 2, 1]);
