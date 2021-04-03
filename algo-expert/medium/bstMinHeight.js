function minHeightBst(array) {
	return constructMinHeightBst(array, null, 0, array.length - 1);
}
// sorted and distinct!
function constructMinHeightBst(array, bst, startIdx, endIdx) {
	// 1. find midpoint (root node)
	// 2. recursive on left half with midpoint
	// 3. recursive on right half with midpoint
	if (endIdx < startIdx) return;
	const midIdx = Math.floor((startIdx + endIdx) / 2);
	const valueToAdd = array[midIdx];
	if (bst === null) {
		bst = new BST(valueToAdd);
	} else {
		bst.insert(valueToAdd);
	}
	constructMinHeightBst(array, bst, startIdx, midIdx - 1);
	constructMinHeightBst(array, bst, midIdx + 1, endIdx);
	return bst;
}

array = [1, 2, 5, 7, 10, 13, 14, 15, 22];

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
  }
}