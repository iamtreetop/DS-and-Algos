class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(h + k) space | O(h) time 
// reverse inOrder traversal
// 1. keep track of # of nodes visited
// 2. last value visited
class TreeInfo { //(0, -1)
	constructor(numNodesVisited, lastVisitedNodeValue) {
		this.numNodesVisited = numNodesVisited;
		this.lastVisitedNodeValue = lastVisitedNodeValue;
	}
}

function findKthLargestValueInBst(tree, k) {
  const treeInfo = new TreeInfo(0, -1);
  reverseInOrderTraverse(tree, k, treeInfo);
  return treeInfo.lastVisitedNodeValue;
}

function reverseInOrderTraverse(tree, k, treeInfo) {
	if (tree === null || treeInfo.numNodesVisited >= k) return;
	
	reverseInOrderTraverse(tree.right, k, treeInfo);
	if (treeInfo.numNodesVisited < k) {
		treeInfo.numNodesVisited++;
		treeInfo.lastVisitedNodeValue = tree.value;
		reverseInOrderTraverse(tree.left, k, treeInfo)
	}
}

// function findKthLargestValueInBst(tree, k) {
//  // brute force
// 	// initialize empty array
// 	// inorder traversal
// 	// find kth largest node; length - k
//   const sortedNodes = [];
//   inOrderTraverse(tree, sortedNodes);
//   return sortedNodes[sortedNodes.length - k]
// }

// // [1,2,3,5,5,15,17,20,22]; length = 9, k = 3
// // kth largest is index 6 => 9-3

// function inOrderTraverse(tree, sortedNodes) {
//   if (tree === null) return;

//   inOrderTraverse(tree.left, sortedNodes);
//   sortedNodes.push(tree.value);
//   inOrderTraverse(tree.right, sortedNodes);
// }

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