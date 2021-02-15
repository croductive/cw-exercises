public class Kata {
  public static int mostFrequentItemCount(int[] collection) {
    // Do your magic :)
    int currDigit = 0;
    int count;
    int highestCount = 0;
    
    for (int i =0; i< collection.length; i++){
      currDigit = collection[i];
      count = 0;
      
      for (int j = 0; j < collection.length; j++){
        if (currDigit == collection[j]){
          count++;
          if(count > highestCount) {
            highestCount = count;
          }
        }
      }
    }
   return highestCount; 
  }
}

System.out.println(2, Kata.mostFrequentItemCount(new int[] {3, -1, -1}));
System.out.println(5, Kata.mostFrequentItemCount(new int[] {3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3}));
