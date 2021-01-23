function twoNumberSum(array, targetSum) {
  // Brute force
  // Time: O(n^2)
  // Space O(n)
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
  // Time: O(n)
  // Space: O(n)
  const numSet = new Set();
  for (let num of array) {
    const diff = targetSum - num;
    if (numSet.has(diff)) {
        return [diff, num];
    } else {
        numSet.add(num);
    }
  }
  return [];
}
