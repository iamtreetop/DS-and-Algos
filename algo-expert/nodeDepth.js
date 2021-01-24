class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
};

function nodeDepthsRecur(root, depth = 0) {
  if (!root) return 0;

  return (
    depth +
    nodeDepths(root.left, depth + 1) +
    nodeDepths(root.right, depth + 1)
  );
};

// average case: when tree is balanced
// O(n) time | O(h) space - where n is the # of nodes
// in binary tree and h is height of tree
function nodeDepthsIter(root) {
  // keep track of depth
  let depthSum = 0;
  // use stack DS
  let stack = [{ node: root, depth: 0 }];
  // iterate until stack is empty
  while (stack.length) {
    const { node, depth } = stack.pop();
    if (!node) continue;
    depthSum += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }
  return depthSum;
}