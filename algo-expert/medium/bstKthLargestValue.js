class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function findKthLargestValueInBst(tree, k) {
  // 1. initialize an empty array
  // 2. inOrder traverse the node
  // 3. return array[array.length - k]
  const sortedNodes = [];
  inOrderTraverse(tree, sortedNodes);
  return sortedNodes[sortedNodes.length - k]
}

function inOrderTraverse(tree, sortedNodes) {
  if (tree === null) return;

  inOrderTraverse(tree.left, sortedNodes);
  sortedNodes.push(tree.value);
  inOrderTraverse(tree.right, sortedNodes);
}

// tree =     15
//          /    \
//         5      20
//       /  \    /  \
//      2    5  17   22
//     / \
//    1   3
// "nodes": [
//   {"id": "15", "left": "5", "right": "20", "value": 15},
//   {"id": "20", "left": "17", "right": "22", "value": 20},
//   {"id": "22", "left": null, "right": null, "value": 22},
//   {"id": "17", "left": null, "right": null, "value": 17},
//   {"id": "5", "left": "2", "right": "5-2", "value": 5},
//   {"id": "5-2", "left": null, "right": null, "value": 5},
//   {"id": "2", "left": "1", "right": "3", "value": 2},
//   {"id": "3", "left": null, "right": null, "value": 3},
//   {"id": "1", "left": null, "right": null, "value": 1}
// ],
// "root": "15"
// output: 17