// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem
// without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

var swapPairs = function (head) {
  let curr = head;
  let newHead = head && head.next ? head.next : head;

  while (curr && curr.next) {
    let next = curr.next;
    let temp = next.next;

    next.next = curr;
    curr.next = temp && temp.next ? temp.next : temp;

    curr = temp;
  }

  return newHead;
};

var swapPairsRecurion = function (head) {
  // base case
  if (head === null || head.next === null) return head;
  let temp = head.next;
  head.next = temp.next;
  temp.next = head;
  head.next = swapPairs(head.next);
  return temp;
};

// Example 1:
// Input: head = [1,2,3,4]
// Output: [2,1,4,3]

// Example 2:
// Input: head = []
// Output: []

// Example 3:
// Input: head = [1]
// Output: [1]
