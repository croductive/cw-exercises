const chai = require("chai");
const assert = chai.assert;

function getStrongest(value) {
  let strongest = 0;
  while (value % 2 === 0) {
    value /= 2;
    strongest++;
  }
  return strongest;
}

function strongestEven(n, m) {
  const largest = {
    value: 0,
    strongest: 0,
  };

  for (let value = n; value <= m; value++) {
    const strongest = getStrongest(value);
    if (strongest > largest.strongest) {
      largest.value = value;
      largest.strongest = strongest;
    }
  }
  return largest.value;
}

describe("Sample tests", function () {
  it("should work for sample test cases", function () {
    assert.strictEqual(strongestEven(1, 2), 2);
    assert.strictEqual(strongestEven(5, 10), 8);
    assert.strictEqual(strongestEven(48, 56), 48);
    assert.strictEqual(strongestEven(129, 193), 192);
  });
});
