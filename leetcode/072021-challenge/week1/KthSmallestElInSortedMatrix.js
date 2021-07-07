// Given an n x n matrix where each of the rows and columns are sorted in ascending order, return the 
// kth smallest element in the matrix.

// Note that it is the kth smallest element in the sorted order, not the kth distinct element.

// brute force
// Time O(n) | space: O(n)
var kthSmallest = function (matrix, k) {
  const flattened = matrix.flat();
  const sorted = flattened.sort((a, b) => a - b);

  return sorted[k - 1];
};

// bSearch
// Time O(log(n)) | Space O(n)
var kthSmallest = function (matrix, k) {
  let left = matrix[0][0],
    right = matrix[matrix.length - 1][matrix[0].length - 1];

  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    let count = 0;

    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        if (matrix[i][j] <= mid) {
          count++;
        } else {
          break;
        }
      }
    }

    if (count < k) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
};

// Example 1:
// Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
// Output: 13
// Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13

// Example 2:
// Input: matrix = [[-5]], k = 1
// Output: -5