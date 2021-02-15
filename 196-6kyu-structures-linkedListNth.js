function Node(data) {
  this.data = data;
  this.next = null;
}

function insertNth(head, index, data) {
  let counter = 0;
  let newNode = new Node(data);
  let next = head;

  if (index === 0) {
    newNode.next = head;
    head = newNode;
  } else {
    while (counter !== index - 1) {
      counter++;
      next = next.next;
    }

    let temp = next.next;
    next.next = newNode;
    newNode.next = temp;
  }
  return head;
}
/*
Test.describe("tests for inserting the Nth node in a linked list.", function() {
  Test.it("should be able to handle an empty list.", function() {
    Test.assertEquals(insertNth(null, 0, 12).data, 12, "should be able to insert a node on an empty/null list.");
    Test.assertEquals(insertNth(null, 0, 12).next, null, "value at index 1 should be null.");
  });
  Test.it("should be able to insert a new node at the head of a list.", function() {
    Test.assertEquals(insertNth(buildOneTwoThree(), 0, 23).data, 23, "should be able to insert new node at head of list.");
    Test.assertEquals(insertNth(buildOneTwoThree(), 0, 23).next.data, 1, "value for node at index 1 should be 1.");
    Test.assertEquals(insertNth(buildOneTwoThree(), 0, 23).next.next.data, 2, "value for node at index 2 should be 2.");
    Test.assertEquals(insertNth(buildOneTwoThree(), 0, 23).next.next.next.data, 3, "value for node at index 3 should be 3.");
    Test.assertEquals(insertNth(buildOneTwoThree(), 0, 23).next.next.next.next, null, "value at index 4 should be null.");
  });
  Test.it("should be able to insert a new node at index 1 of a list.", function() {
    Test.assertEquals(insertNth(buildOneTwoThree(), 1, 23).data, 1, "value for node at index 0 should be 1.");
    Test.assertEquals(insertNth(buildOneTwoThree(), 1, 23).next.data, 23, "value for node at index 1 should be 23");
    Test.assertEquals(insertNth(buildOneTwoThree(), 1, 23).next.next.data, 2, "value for node at index 2 should be 2.");
    Test.assertEquals(insertNth(buildOneTwoThree(), 1, 23).next.next.next.data, 3, "value for node at index 3 should be 3.");
    Test.assertEquals(insertNth(buildOneTwoThree(), 1, 23).next.next.next.next, null, "value at index 4 should be null.");
  });
  Test.it("should be able to insert a new node at index 2 of a list.", function() {
    Test.assertEquals(insertNth(buildOneTwoThree(), 2, 23).data, 1, "head should remain unchanged after inserting new node at index 2");
    Test.assertEquals(insertNth(buildOneTwoThree(), 2, 23).next.data, 2, "value at index 1 should remain unchanged after inserting new node at index 2");
    Test.assertEquals(insertNth(buildOneTwoThree(), 2, 23).next.next.data, 23, "value for node at index 2 should be 23.");
    Test.assertEquals(insertNth(buildOneTwoThree(), 2, 23).next.next.next.data, 3, "value for node at index 3 should be 3.");
    Test.assertEquals(insertNth(buildOneTwoThree(), 2, 23).next.next.next.next, null, "value at index 4 should be null.");
  });
  Test.it("should be able to insert a new node at tail of a list.", function() {
    Test.assertEquals(insertNth(buildOneTwoThree(), 3, 23).data, 1, "head should remain unchanged after inserting new node at tail");
    Test.assertEquals(insertNth(buildOneTwoThree(), 3, 23).next.data, 2, "value at index 1 should remain unchanged after inserting new node at tail");
    Test.assertEquals(insertNth(buildOneTwoThree(), 3, 23).next.next.data, 3, "value for node at index 2 should be 3.");
    Test.assertEquals(insertNth(buildOneTwoThree(), 3, 23).next.next.next.data, 23, "value for node at index 3 should be 23.");
    Test.assertEquals(insertNth(buildOneTwoThree(), 3, 23).next.next.next.next, null, "value at index 4 should be null.");
  });
  Test.it("should throw exception if index is too large.", function() {
    Test.expectError("Invalid index value should throw error.", function() {insertNth(buildOneTwoThree(), 4, 23)});
  });
}); */
