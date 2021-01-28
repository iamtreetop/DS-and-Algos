// O(n^2) time | O(n) space
function threeNumberSum(array, targetSum) {
  // sort array
  // initialize result array
  // walk over array, while lenght -2
    // while leftpOinter < rightpointer
    // if currenct sum === target sum
      // push triplet into result array, increment left, decrment right
    // else if current sum < target sum, 
      // increament left
    // else current sum > target
      // decrmeent right
  // return result array

  array.sort((a, b) => a - b);
  let triplets = [];

  for (let i = 0; i < array.length - 2; i++) {
    let p1 = i + 1;
    let p2 = array.length - 1;
    while (p1 < p2) {
      const sum = array[i] + array[p1] + array[p2];
      if (sum === targetSum) {
        triplets.push([array[i], array[p1], array[p2]]);
        p1++;
        p2--;
      } else if (sum < targetSum) {
        p1++;
      } else if (sum > targetSum) {
        p2--;
      }
    }
  }
  return triplets;
};

//{"array": [12, 3, 1, 2, -6, 5, -8, 6], "targetSum": 0} 
// output: [
//   [8,2,6],
//   [-8,3,5],
//   [-6,1,5]
// ]