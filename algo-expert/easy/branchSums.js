class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// time: O(n) time | O(n) space - where n is the # of nodes in binary tree

function branchSums(root) {
  const resArr = [];
  calculateBranchSums(root, 0, resArr);
  return resArr;
}

function calculateBranchSums(node, runningSum, resArr) {
  if (!node) return;

  const newSum = runningSum + node.value;

  if (!node.left & !node.right) {
    // we know this is a leaf node
    resArr.push(newSum);
  }

  // if there are still child nodes, we'll recursively call function
  calculateBranchSums(node.left, newSum, resArr);
  calculateBranchSums(node.right, newSum, resArr);
}


// {
//   "tree": {
//     "nodes": [
//       {"id": "1", "left": "2", "right": "3", "value": 1},
//       {"id": "2", "left": "4", "right": "5", "value": 2},
//       {"id": "3", "left": "6", "right": "7", "value": 3},
//       {"id": "4", "left": "8", "right": "9", "value": 4},
//       {"id": "5", "left": "10", "right": null, "value": 5},
//       {"id": "6", "left": null, "right": null, "value": 6},
//       {"id": "7", "left": null, "right": null, "value": 7},
//       {"id": "8", "left": null, "right": null, "value": 8},
//       {"id": "9", "left": null, "right": null, "value": 9},
//       {"id": "10", "left": null, "right": null, "value": 10}
//     ],
//     "root": "1"
//   }
// }

// {
//   "tree": {
//     "nodes": [{"id": "1", "left": null, "right": null, "value": 1}],
//     "root": "1"
//   }
// }