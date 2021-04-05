class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
// preorder => self, left, right

// O(n) time | O(n) space - where n is length of input array
class TreeInfo {
  // keep track of global variabl to pass to recursive function
  constructor(rootIdx) {
    this.rootIdx = rootIdx
  }
}

function reconstructBst(preOrderTraversalValues) {
	const treeInfo = new TreeInfo(0);
  return recontructBstFromRange(-Infinity, Infinity, preOrderTraversalValues, treeInfo);
}

function recontructBstFromRange(lowerBound, upperBound, preOrderTraversalValues, currentSubtreeInfo) {
	if (currentSubtreeInfo.rootIdx === preOrderTraversalValues.length) return null;
	
	const rootValue = preOrderTraversalValues[currentSubtreeInfo.rootIdx];
	if (rootValue < lowerBound || rootValue >= upperBound) return null;
	
	currentSubtreeInfo.rootIdx++;
	
	const leftSubtree = recontructBstFromRange(lowerBound, rootValue, preOrderTraversalValues, currentSubtreeInfo)
	const rightSubtree = recontructBstFromRange(rootValue, upperBound, preOrderTraversalValues, currentSubtreeInfo)
	return new BST(rootValue, leftSubtree, rightSubtree)
}

// Brute Force
// o(n^2) time | O(n) space - where n is length on input array
// function reconstructBst(preOrderTraversalValues) {
//   // 1. base case;if input length is none
//   // 2. iterate over input array; keep track of right index and currval
//   //   a. if val >= currval, reassign right idx
//   // 3. recursive call on left subtree and right subtree
//   // 4. return new BST
//   if (preOrderTraversalValues.length === 0) return null;
	
// 	let rightSubtreeRootIdx = preOrderTraversalValues.length;
// 	const currentValue = preOrderTraversalValues[0];
	
// 	for (let i = 1; i < preOrderTraversalValues.length; i++) {
// 		const value = preOrderTraversalValues[i];
// 		if (value >= currentValue) {
// 			rightSubtreeRootIdx = i;
// 			break;
// 		}
// 	}
	
// 	const leftSubtree = reconstructBst(preOrderTraversalValues.slice(1, rightSubtreeRootIdx));
// 	const rightSubtree = reconstructBst(preOrderTraversalValues.slice(rightSubtreeRootIdx));
// 	return new BST(currentValue, leftSubtree, rightSubtree)
// }

preOrderTraversalValues = [10, 4, 2, 1, 5, 17, 19, 18]

// tree =     10
//          /    \
//         4      17
//       /  \      \
//      2    5     19
//     /           /
//    1           18
