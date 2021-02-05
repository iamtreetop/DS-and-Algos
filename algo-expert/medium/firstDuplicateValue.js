// O(n) time | O(n) space - n is length of input array
function firstDuplicateValue3(array) {
	// since all values are btwn 1 & n, they cna all be mapped to an index in the array
		// cannot map n to nth index because oob, so n-1
	// array = [5,1,3,2,5,3]
	// idx = [0,1,2,3,4,5]
	// walk over input array  
		// map value to an index & make the value at that mapped index negative  
		// ex. 5 maps to 4, see 5 for the seocnd time, it maps to index 4, index 4 is negative, therefore is a dupe
		// if ele is already negative, return ele

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
	// data structure to store already seen ele
	// walk over input array
		// if ele is not in data structure, add/push to the data structure
		// if it is, return that ele
	// return -1, if no dupes
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