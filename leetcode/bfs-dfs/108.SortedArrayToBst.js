// Given an integer array nums where the elements are sorted in ascending order, 
// convert it to a height-balanced binary search tree.

// A height-balanced binary tree is a binary tree in which the depth of the two 
// subtrees of every node never differs by more than one.

var sortedArrayToBST = function(nums) {
  // 1. find midpoint of input array
  // 2. midpoint becomes the root
  // 3. recursively call on root.left and root.right
  
  if (!nums.length) return null;
  
  let midPoint = Math.floor(nums.length/2);
  let root = new TreeNode(nums[midPoint]);
  root.left = sortedArrayToBST(nums.slice(0, midPoint));
  root.right = sortedArrayToBST(nums.slice(midPoint + 1));
  return root;
};

// Example 1:
// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:
// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,3] and [3,1] are both a height-balanced BSTs.
 

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums is sorted in a strictly increasing order.