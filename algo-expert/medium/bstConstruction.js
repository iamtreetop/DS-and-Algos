class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  // Avg: O(log(n)) time | O(1) space
  // worst: O(n) time | O(1) space
  insert(value) {
    let currNode = this;
		while (true) {
			if (value < currNode.value) {
				if (currNode.left === null) {
					currNode.left = new BST(value);
					break;
				} else {
					currNode = currNode.left;
				}
			} else {
				if (currNode.right === null) {
					currNode.right = new BST(value);
					break;
				} else {
					currNode = currNode.right
				}
			}
		}
    return this;
  }

  // Avg: O(log(n)) time | O(1) space
  // worst: O(n) time | O(1) space
  contains(value) {
    let currNode = this;
		while (currNode !== null) {
			if (value < currNode.value) {
				currNode = currNode.left;
			} else if (value > currNode.value) {
				currNode = currNode.right;
			} else {
				return true;
			}
		}
		return false
  }
  // Avg: O(log(n)) time | O(1) space
  // worst: O(n) time | O(1) space
  remove(value, parentNode = null) {
    let currNode = this;
		while (currNode !== null) {
			if (value < currNode.value) {
				parentNode = currNode;
				currNode = currNode.left;
			} else if (value > currNode.value) {
				parentNode = currNode;
				currNode = currNode.right;
			} else {
				if (currNode.left !== null && currNode.right !== null) {
					currNode.value = currNode.right.getMinValue();
					currNode.right.remove(currNode.value, currNode);
				} else if (parentNode === null) {
					if (currNode.left !== null) {
						currNode.value = currNode.left.value;
						currNode.right = currNode.left.right;
						currNode.left = currNode.left.left;
					} else if (currNode.right !== null) { 
						currNode.value = currNode.right.value;
						currNode.left = currNode.right.left;
						currNode.right = currNode.right.right;
					} else {
					// do nothing
					}
				} else if (parentNode.left === currNode) {
					parentNode.left = currNode.left !== null ? currNode.left : currNode.right;
				} else if (parentNode.right === currNode) {
					parentNode.right = currNode.left !== null ? currNode.left : currNode.right;
				}
			break;
			}
		}
    return this;
  }
	
	getMinValue() {
		let currNode = this;
		while (currNode.left !== null) {
			currNode = currNode.left;
		}
		return currNode.value
	}
}