// Given the root of a binary tree, invert the tree, and return its root.

var invertTreeRecur = function (root) {
  if (!root) {
    return root;
  }

  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];

  return root;
};

var invertTreeDfs = function (root) {
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();

    if (node) {
      [node.left, node.right] = [node.right, node.left];
      stack.push(node.left, node.right);
    }
  }

  return root;
};

var invertTreeBfs = function (root) {
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();

    if (node) {
      [node.left, node.right] = [node.right, node.left];
      queue.push(node.left, node.right);
    }
  }

  return root;
};

// Example 1:
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

// Example 2:
// Input: root = [2,1,3]
// Output: [2,3,1]

// Example 3:
// Input: root = []
// Output: []

// Constraints:
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100