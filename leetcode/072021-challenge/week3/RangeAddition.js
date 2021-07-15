// You are given an integer length and an array updates where updates[i] = [startIdxi, endIdxi, inci].

// You have an array arr of length length with all zeros, and you have some operation to apply on arr. 
// In the ith operation, you should increment all the elements 
// arr[startIdxi], arr[startIdxi + 1], ..., arr[endIdxi] by inci.

// Return arr after applying all the updates.

var getModifiedArray = function (length, updates) {
  // initialize an array with 0's;
  // iterate over updates & pass tuple to helper method

  // helper
  // use two pointers to update result array
  // update array where tuple[0] start, tuple[1] end, tuple[2] value

  const res = Array(length).fill(0);

  for (const tuple of updates) {
    update(tuple[0], tuple[1], tuple[2], res);
  }

  return res;
};

const update = (startIdx, endIdx, val, res) => {
  while (startIdx < endIdx) {
    res[startIdx] += val;
    res[endIdx] += val;
    startIdx++;
    endIdx--;
  }
  if (startIdx === endIdx) {
    res[startIdx] += val;
  }
}; 

// Example 1:
// [0,0,0,0,0]
// [0,2,2,2,0]
// [0,2,5,5,3]
// [-2,0,3,5,3]

// Input: length = 5, updates = [[1,3,2],[2,4,3],[0,2,-2]]
// Output: [-2,0,3,5,3]

// Example 2:
// Input: length = 10, updates = [[2,4,6],[5,6,8],[1,9,-4]]
// Output: [0,-4,2,2,2,4,4,-4,-4,-4]
 

// Constraints:

// 1 <= length <= 105
// 0 <= updates.length <= 104
// 0 <= startIdxi <= endIdxi < length
// -1000 <= inci <= 1000