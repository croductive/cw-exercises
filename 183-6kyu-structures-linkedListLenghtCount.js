function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  // Your code goes here.
  let len = 1;

  if (!head) {
    return 0;
  }

  while (head.next) {
    len++;
    head = head.next;
  }
  return len;
}

function count(head, data) {
  if (!head) {
    return 0;
  }

  let count = 0;

  while (head.next) {
    if (head.data === data) {
      count++;
    }
    head = head.next;
  }
  if (head.data === data) {
    count++;
  }
  return count;
}

console.log(length(null), 0, "Length of null list should be zero.");
console.log(
  length(new Node(99)),
  1,
  "Length of single node list should be one."
);
console.log(length(list), 3, "Length of the three node list should be three.");
console.log(count(list, 1), 1, "list should only contain one 1.");
console.log(count(list, 2), 1, "list should only contain one 2.");
console.log(count(list, 3), 1, "list should only contain one 3.");
console.log(
  count(list, 99),
  0,
  "list should return zero for integer not found in list."
);
console.log(count(null, 1), 0, "null list should always return count of zero.");
