// average: O(log(n)) time; O(1) space;
// worst: O(n) time; O(1) space;

function findClosestValueInBst(tree, target) {
  let closest = Infinity;
  let currNode = tree;

  while (currNode) {
    
    if (Math.abs(target - currNode.value) < Math.abs(target - closest)) {
      closest = currNode.value
    }
    
    if (target < currNode.value) {
      currNode = currNode.left
    } else if (target > currNode.value) {
      currNode = currNode.right;
    } else {
      break;
    }
  }
  return closest;
}
function findClosestValueInBstRecur(tree, target) {
  let closest = Infinity;
  let currNode = tree;

  if(tree === null) return closest;
  
  if (Math.abs(target - currNode.value) < Math.abs(target - closest)) {
    closest = currNode.value
  }
    
  if (target < currNode.value) {
    return findClosestValueInBstRecur(currNode.left, target)
  } else if (target > currNode.value) {
    return findClosestValueInBstRecur(currNode.right, target);
  } else {
    return closest;
  }
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}


// {
//   "tree": {
//     "nodes": [
//       {"id": "10", "left": "5", "right": "15", "value": 10},
//       {"id": "15", "left": "13", "right": "22", "value": 15},
//       {"id": "22", "left": null, "right": null, "value": 22},
//       {"id": "13", "left": null, "right": "14", "value": 13},
//       {"id": "14", "left": null, "right": null, "value": 14},
//       {"id": "5", "left": "2", "right": "5-2", "value": 5},
//       {"id": "5-2", "left": null, "right": null, "value": 5},
//       {"id": "2", "left": "1", "right": null, "value": 2},
//       {"id": "1", "left": null, "right": null, "value": 1}
//     ],
//     "root": "10"
//   },
//   "target": 12
// }