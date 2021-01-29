// O(n) time | O(1) space
function isMonotonic(array) {
  if (array.length <= 2) return true;
	
	let direction = array[1] - array[0];
	
	for (let i = 2; i < array.length; i++) {
		if (direction === 0) {
			direction = array[i] - array[i - 1];
			continue;
		}
		
		if ( breakDir(direction, array[i - 1], array[i]) ) {
			return false;
		}
	}
	
	return true;
}

function breakDir(direction, prevNum, currNum) {
	const diff = currNum - prevNum;
	if (direction > 0) return diff < 0;
	return diff > 0;
}



// O(n) time | O(1) space
function isMonotonic2(array) {
	let isStrictlyIncreasing = true;
	let isStrictlyDecreasing = true;
	
	for (let i = 1; i < array.length; i ++) {
		const currNum = array[i];
		const prevNum = array[i - 1]
		if (currNum < prevNum) isStrictlyIncreasing = false;
		if (currNum > prevNum) isStrictlyDecreasing = false;
	}
	
	return isStrictlyIncreasing || isStrictlyDecreasing;
};

array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001] // => true
isMonotonic(array)