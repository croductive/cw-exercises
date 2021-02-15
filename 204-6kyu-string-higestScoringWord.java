

public class Kata {

  public static String high(String s) {
    // Your code here...
    int maxValue = 0;
    String highestValueString = "";
    
    String[] words = s.split(" ");
    
    for(String word: words) {
      int tempValue = wordValue(word);
      if(tempValue > maxValue){
        maxValue = tempValue;
        highestValueString = word;
      }
    }
    return highestValueString;
  }
  
  private static int wordValue(String word) {
    int value = 0;
    for(char ch: word.toCharArray()) {
      value += (int)ch - 96;
    }
    return value;
  }
  
}

import org.junit.Test;
import static org.junit.Assert.assertEquals;
import org.junit.runners.JUnit4;

public class SolutionTest {
    @Test
    public void sampleTests() {
        assertEquals("taxi", Kata.high("man i need a taxi up to ubud"));
        assertEquals("volcano", Kata.high("what time are we climbing up to the volcano"));
        assertEquals("semynak", Kata.high("take me to semynak"));
    }
}
