class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(n) time | O(1) space

function removeDuplicatesFromLinkedList(linkedList) {
  // walk through linked list
  // check if next node is same as current node
    // if it is, remove next
    // else change current node to next

    
	let currNode = linkedList;
	while (currNode !== null) {
		let nextNode = currNode.next;
		while (nextNode !== null && nextNode.value === currNode.value) {
			nextNode = nextNode.next
		}
		
		currNode.next = nextNode;
		currNode = nextNode;
	}
	
  return linkedList;

  return null;
}