// O(n) time | O(1) space - where n is the length of input array
function kadanesAlgorithm(array) {
  // DP
	// keep track of 2 variables
	// walk over input array
		// take max number between current number OR maxEnding + current num
		// set currMax to max between currMax OR maxEnding
	// return currMax
	let maxEnding = array[0];
	let currMax = array[0];
	
	for (let i = 1; i < array.length; i++) {
		const num = array[i];
		maxEnding = Math.max(num, maxEnding + num);
		currMax = Math.max(maxEnding, currMax);
	}
	return currMax;
};