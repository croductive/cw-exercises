package weight

fun orderWeight(string: String) = string.trim().split(" ")
    .asSequence()
    .filter{ it.isNotBlank()}
    .map{ Pair(it.toLong(), sumOfDigits(it))}
    .sortedWith(compareBy<Pair<Long, Long>> {it.second}
             .thenBy{it.first.toString()}  )
    .map {it.first}
    .joinToString(" ")
    
fun sumOfDigits(number: String) = number.map {it.toString().toLong() }.sum()

/*package weight

import org.junit.Assert.*
import org.junit.Test

class WeightSortTest {
  
  @Test
  fun BasicTests() {
    println("****** Basic Tests ******")
    assertEquals("2000 103 123 4444 99", orderWeight("103 123 4444 99 2000"))
    assertEquals("11 11 2000 10003 22 123 1234000 44444444 9999", orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"))
    
  }
}*/
