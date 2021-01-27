function twoNumberSum(array, targetSum) {
  // Brute force
  // O(n^2) Time | O(1) Space
  // let i = 0, j = 0
  // let sumsArr = [];
  // for (let i = 0; i < array.length - 1; i++) {
  // 	for (let j = i+1; j < array.length; j++) {
  // 		if (array[i] + array[j] === targetSum) {
  // 			sumsArr.push(array[i], array[j])
  // 		}
  // 	}
  // }
  // return sumsArr;

  // Hash Table
  // Time: O(n) Time | O(n) Space
  // const numSet = new Set();
  // for (let num of array) {
  //   const diff = targetSum - num;
  //   if (numSet.has(diff)) {
  //     return [diff, num];
  //   } else {
  //     numSet.add(num);
  //   }
  // }
  // return [];

  // Two Pointerse
  // Time: O(nlog(n)) Time | O(1) Space

  // Hash Table
  // Time: O(n) Time | O(n) Space
  array.sort((a, b) => a - b);
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  while (leftPointer < rightPointer) {
    const sum = array[leftPointer] + array[rightPointer];
    
    if (sum === targetSum) {
      return [array[leftPointer], array[rightPointer]]
    } else if (sum < targetSum) {
      leftPointer++;
    } else if (sum > targetSum) {
      rightPointer++;
    }
  }
  return [];
}
