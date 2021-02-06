// time O(n) | space space O(n)
function maxSubsetSumNoAdjacent(array) {
  // DP
  // [75, 105, 120, 75, 90, 135]
  // [75, 105, 195, 195, 285, 330]
  if (!array.length) return 0;
	if (array.length === 1) return array[0];
	
	const maxSums = array.slice();
	
	maxSums[1] = Math.max(array[0], array[1])
	for (let i = 2; i < array.length; i++) {
		maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i]);
	}
	return maxSums[maxSums.length - 1];
};

// time O(n) | space space O(n) - where n is length of input array 
function maxSubsetSumNoAdjacent(array) {

  // [75, 105, 120, 75, 90, 135]
  // i = 5; 135
  // current =  330
  // second = 285
  // first = 330

  if (!array.length) return 0;
	if (array.length === 1) return array[0];
	
	let second = array[0];
	let first = Math.max(array[0], array[1])
	for (let i = 2; i < array.length; i++) {
		const current = Math.max(first, second + array[i]);
		second = first;
		first = current;
	}
	return first;
}