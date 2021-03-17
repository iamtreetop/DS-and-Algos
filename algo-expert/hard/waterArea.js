// Time O(n) | Space O(n) - where n is length of input array
function waterArea(heights) {
  // DP
	// calculate water level at each index
	// find highest pillar
	// water is trapped between the highest pilalrs on left and on right
		// find height water by the min of the two pillars
	
	const maxHeights = new Array(heights.length).fill(0)
	let leftMaxHeight = 0;
	let rightMaxHeight = 0;
	
	for (let i = 0; i < heights.length; i++) {
		maxHeights[i] = leftMaxHeight;
		leftMaxHeight = Math.max(leftMaxHeight, heights[i])
	}
	
	for (let i = heights.length - 1; i >= 0; i--) {
		let minHeight = Math.min(rightMaxHeight, maxHeights[i]);
		if (heights[i] < minHeight) {
			maxHeights[i] = minHeight - heights[i];		
		} else {
			maxHeights[i] = 0;
		}
		rightMaxHeight = Math.max(rightMaxHeight, heights[i]);
	}
	return maxHeights.reduce((a,b) => a+b, 0)
};

heights = [0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]
// 48