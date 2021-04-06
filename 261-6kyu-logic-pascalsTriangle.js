const chai = require("chai");
const assert = chai.assert;

function pascalsTriangle(n) {
  const triangle = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    triangle.push(row);
    for (let j = 1; j <= i; j++) {
      if (j === 1 || j === i) {
        row.push(1);
      } else {
        const prevLeft = triangle[i - 2][j - 2];
        const prevRight = triangle[i - 2][j - 1];

        row.push(prevLeft + prevRight);
      }
    }
  }
  return triangle.reduce((all, row) => all.concat(row), []);
}

describe("Basic tests", function () {
  it("Level 1 triangle", function () {
    assert.deepEqual(pascalsTriangle(1), [1], "1 level triangle incorrect");
  });
  it("Level 2 triangle", function () {
    assert.deepEqual(
      pascalsTriangle(2),
      [1, 1, 1],
      "2 level triangle incorrect"
    );
  });
  it("Level 4 triangle", function () {
    assert.deepEqual(
      pascalsTriangle(4),
      [1, 1, 1, 1, 2, 1, 1, 3, 3, 1],
      "4 level triangle incorrect"
    );
  });
  it("Level 6 triangle", function () {
    assert.deepEqual(
      pascalsTriangle(6),
      [1, 1, 1, 1, 2, 1, 1, 3, 3, 1, 1, 4, 6, 4, 1, 1, 5, 10, 10, 5, 1],
      "6 level triangle incorrect"
    );
  });
});
