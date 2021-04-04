class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
// preorder => self, left, right
function reconstructBst(preOrderTraversalValues) {
  if (preOrderTraversalValues.length === 0) return null;
}

preOrderTraversalValues = [10, 4, 2, 1, 5, 17, 19, 18]

// tree =     10
//          /    \
//         4      17
//       /  \      \
//      2    5     19
//     /           /
//    1           18
