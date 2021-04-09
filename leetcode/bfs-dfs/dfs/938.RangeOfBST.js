// Given the root node of a binary search tree, return the 
// sum of values of all nodes with a value in the range [low, high].

// O(n) time | O(n) space
var rangeSumBST = function (root, low, high) {
  // 1. Store a sum variable
  // 2. traverse through tree using DFS (stack)
  // 3. at each node, check if node.val is in range
      // if yes, add to sum variable
  // 4. check if there is a left or right child
    // push the child to the stack
  // 5. return sum
  
  let sum = 0;
  let stack = [root];
  
  while (stack.length) {
    let currNode = stack.pop()
    
    if (currNode.val >= low && currNode.val <= high) {
      sum += currNode.val;
    } else {
      sum += 0;
    }
    
    if (currNode.left) {
      stack.push(currNode.left)
    }
    
    if (currNode.right) {
      stack.push(currNode.right)
    }
  }
  return sum;
};

// Example 1:
// Input: root = [10,5,15,3,7,null,18], low = 7, high = 15
// Output: 32

// Example 2:
// Input: root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// Output: 23
 
// Constraints:
// The number of nodes in the tree is in the range [1, 2 * 104].
// 1 <= Node.val <= 105
// 1 <= low <= high <= 105
// All Node.val are unique.