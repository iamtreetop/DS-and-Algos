// You are given two binary trees root1 and root2.

// Imagine that when you put one of them to cover the other, some nodes of the two trees 
// are overlapped while the others are not. You need to merge the two trees into a new binary 
// tree. The merge rule is that if two nodes overlap, then sum node values up as the new 
// value of the merged node. Otherwise, the NOT null node will be used as the node of the 
// new tree.

// Return the merged tree.

// Note: The merging process must start from the root nodes of both trees.

// traverse through tree in preorder => self, left, right
// check if both tree nodes are null
  // if not, add values together
// recurse left
// recurse right
// return root of new tree

var mergeTreesRecursive = function (root1, root2) {
  if (!root1) {
    return root2;
  };
  if (!root2) {
    return root1;
  };

  root1.val += root2.val

  root1.left = mergeTreesRecursive(root1.left, root2.left);
  root1.right = mergeTreesRecursive(root1.right, root2.right);

  return root1;
};

// Use DFS
// push tuple of root node of both trees to stack
  // for node pair removed, add the values corresponding to the two nodes and update the value of the corresponding node in the first tree
  // if the left child of the first tree exists, push the left child(pair) of both the trees onto the stack.
  // else, append the left child of the second tree to the current node of the first tree
  // do same for right child
  // if both the current nodes are NULL, continue with popping the next nodes from the stack.
// return root
var mergeTreesIter = function (root1, root2) {
  if (root1 === null) {
    return root2
  };

  const stack = [];
  stack.push([root1, root2]);

  while (stack.length) {
    const tuple = stack.pop();
    if (!tuple[0] || !tuple[1]) {
      continue;
    }

    tuple[0].val += tuple[1].val;

    if (!tuple[0].left) {
      tuple[0].left = tuple[1].left;
    } else {
      stack.push([tuple[0].left, tuple[1].left]);
    }

    if (!tuple[0].right) {
      tuple[0].right = tuple[1].right;
    } else {
      stack.push([tuple[0].right, tuple[1].right]);
    }
  }

  return root1;
};

// Example 1:
// Input: root1 = [1,3,2,5], root2 = [2,1,3,null,4,null,7]
// Output: [3,4,5,5,4,null,7]

// Example 2:
// Input: root1 = [1], root2 = [1,2]
// Output: [2,2]
 

// Constraints:
// The number of nodes in both trees is in the range [0, 2000].
// -104 <= Node.val <= 104