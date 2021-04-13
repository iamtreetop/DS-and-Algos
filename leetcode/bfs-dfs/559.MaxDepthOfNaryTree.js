// Given a n-ary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path 
// from the root node down to the farthest leaf node.

// Nary-Tree input serialization is represented in their level order 
// traversal, each group of children is separated by the null value (See examples).

var maxDepth = function (root) {
  // 1. traverse tree with BFS
  // 2. push each node into a queue
  // 3. iterate over each child, and push child into the queue
    // increment count
  if (!root) return 0;
  
  let queue = [];
  let depth = 0;

  queue.push(root);
  
  while (queue.length) {
    let rowSize = queue.length;

    for (let i = 0; i < rowSize; i++) {
      let currNode = queue.shift();

      for (let child of currNode.children) {
        queue.push(child);
      }
    }
    
    depth++;
  }
  
  return depth;
};

// Example 1:
// Input: root = [1,null,3,2,4,null,5,6]
// Output: 3

// Example 2:
// Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: 5

// Constraints:
// The depth of the n-ary tree is less than or equal to 1000.
// The total number of nodes is between [0, 104].