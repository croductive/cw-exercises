func Add(num int) func(int)int {
  return func(n int) int{
    return num+n
  }
}

/*
package kata_test
import (
  . "github.com/onsi/ginkgo"
  . "github.com/onsi/gomega"
  . "codewarrior/kata"
)
var _ = It("sample test", func() {
  Expect(Add(1)(3)).To(Equal(4))
})

*/
