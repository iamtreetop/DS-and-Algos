// Given the roots of two binary trees p and q, write a function to check 
// if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, 
// and the nodes have the same value.

// Recursive
// Time O(n) | Space O(1), height of tree
var isSameTree = function (p, q) {
  if (!p && !q) {
    return true;
  }

  if((!p || !q) ||(p.val !== q.val)) {
    return false;
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// Iterative
// Time O(n) | Space O(n)
var isSameTree = function (p, q) {
  const qStack = [];
  const pStack = [];

  while (p || q || pStack.length || qStack.length) {
    while (p) {
      pStack.push(p);
      p = p.left;
    }
    while (q) {
      qStack.push(q);
      q = q.left;
    }

    p = pStack.pop(); 
    q = qStack.pop();

    if (!p && !q) continue;

    if (!p || !q || p.val !== q.val) return false;

    pStack.push(null);
    qStack.push(null);

    p = p.right;
    q = q.right;
  }
  return true;
};

// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
// Output: true

// Example 2:
// Input: p = [1,2], q = [1,null,2]
// Output: false

// Example 3:
// Input: p = [1,2,1], q = [1,1,2]
// Output: false
 
// Constraints:
// The number of nodes in both trees is in the range [0, 100].
// -104 <= Node.val <= 104