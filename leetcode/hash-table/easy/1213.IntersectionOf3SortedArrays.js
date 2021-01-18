// Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing 
// order, return a sorted array of only the integers that appeared in all three arrays.

var arraysIntersection = function (arr1, arr2, arr3) {
  // use three pointers, one for each input array
  // initialize empty array
  // walk over all three arrays at the same time
    // store current min val of the 3 arrays
    // if eles are the same, push to initialize array
    // if any of the pointers === min value, increamnt the pointer
  let intersection = [];
  let p1 = 0;
  let p2 = 0;
  let p3 = 0;

  while (p1 < arr1.length && p2 < arr2.length && p3 < arr3.length) {
    let min = Math.min(arr1[p1], arr2[p2], arr3[p3]);

    if (arr1[p1] === arr2[p2] && arr1[p1] === arr3[p3]) {
      intersection.push(arr1[p1]);
    }

    if (arr1[p1] === min) p1++;
    if (arr2[p2] === min) p2++;
    if (arr3[p3] === min) p3++;
  }
  return intersection;
};

// Example 1:
// Input: arr1 = [1, 2, 3, 4, 5], 
// arr2 = [1, 2, 5, 7, 9], 
// arr3 = [1, 3, 4, 5, 8]
// Output: [1, 5]
// Explanation: Only 1 and 5 appeared in the three arrays.
  
// Example 2:
// Input: arr1 = [197, 418, 523, 876, 1356],
// arr2 = [501, 880, 1593, 1710, 1870], 
// arr3 = [521, 682, 1337, 1395, 1764]
// Output: []