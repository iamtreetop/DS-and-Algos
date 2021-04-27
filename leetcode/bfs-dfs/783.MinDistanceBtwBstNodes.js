// Given the root of a Binary Search Tree (BST), return the minimum difference 
// between the values of any two different nodes in the tree.

const minDiffInBST = (root) => {
  const stack = [];
  let curr = root,
    prev = null,
    min = Infinity;

  while (stack.length || curr) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();

      if (prev) {
        min = Math.min(min, Math.abs(curr.val - prev.val));
      }
      prev = curr;

      curr = curr.right;
    }
  }

  return min;
};

// Example 1:
// Input: root = [4,2,6,1,3]
// Output: 1

// Example 2:
// Input: root = [1,0,48,null,null,12,49]
// Output: 1
 
// Constraints:
// The number of nodes in the tree is in the range [2, 100].
// 0 <= Node.val <= 105