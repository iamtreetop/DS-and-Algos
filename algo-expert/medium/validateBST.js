class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(n) time | O(d) space
function validateBst(tree) {
  return validateBstHelper(tree, -Infinity, Infinity);
};

function validateBstHelper(tree, minVal, maxVal) {
  if (tree === null) return true;
  if (tree.value < minVal || tree.value >= maxValue) return false;
  const leftIsValid = validateBstHelper(tree.left, minVal, tree.value);
  return leftIsValid && validateBstHelper(tree.right, tree.value, maxVal);
};