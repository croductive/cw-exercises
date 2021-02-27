package kata

func SumCubes(n int) int {
	// your code here
  sum := 0
  
  for i:=1 ; i<=n ; i++{
    sum +=(i*i*i)
  }
  return sum
}

/*
package kata_test

import (
	. "github.com/onsi/ginkgo"
	. "github.com/onsi/gomega"
	. "codewarrior/kata"
)

var _ = Describe("Example Tests",func() {
	It("Should handle basic tests",func() {
		basiccc := [...]int{1,2,3,4,10,123}
		shouldbe := [...]int{1,9,36,100,3025,58155876}
		
		for i,v := range basiccc {
			Expect(SumCubes(v)).To(Equal(shouldbe[i]))}
	})
})

*/
