// iterative solution
// O(n) time | O(n) space
function invertBinaryTree(tree) {
  // initialize a queue, BFS style (layer by layer)
	// swap left node and right nodes
	// push into queue
	const queue = [tree];
	while (queue.length) {
		const currNode = queue.shift();
		if (currNode === null) continue;
		swapLeftAndRight(currNode);
		queue.push(currNode.left);
		queue.push(currNode.right);
	}
}

function swapLeftAndRight(tree) {
	const left = tree.left;
	tree.left = tree.right;
	tree.right = left;
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}