// O(n) time | O(n) space - n is length of input array
function firstDuplicateValue3(array) {
	for (let num of array) {
		const absValue = Math.abs(num);
		if (array[absValue - 1] < 0) {
			return absValue;
		}
		array[absValue - 1] *= -1;
	}
	return -1;
};

// O(n) time | O(n) space - n is length of input array
function firstDuplicateValue2(array) {
	const alreadySeen = new Set();
	for (let num of array) {
		if(alreadySeen.has(num)) {
			return num;
		}
		alreadySeen.add(num);
	}
	return -1;
};

// O(n^2) time | O(1) space - n is length of input array
function firstDuplicateValue1(array) {
  let minSecondIdx = array.length;
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = i+1; j< array.length; j++) {
			if (array[i] === array[j]) {
				minSecondIdx = Math.min(minSecondIdx, j);
			}
		}
	}
	
	if (minSecondIdx === array.length) return -1;
	
  return array[minSecondIdx];
};