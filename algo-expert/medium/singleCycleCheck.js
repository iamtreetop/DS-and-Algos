function hasSingleCycle(array) {
	// jump through array n times
		// if visited > 0 ele && currIdx == 0, return false, increment
		// set currIdx to the new index
	// currIdx === 0
	
	let numEleVisited = 0;
	let currIdx = 0;
	
	while (numEleVisited < array.length) {
		if (numEleVisited > 0 && currIdx === 0) return false;
		numEleVisited++;
		currIdx = getNextIdx(currIdx, array)
	}
	return currIdx === 0;
}

function getNextIdx(currIdx, array) {
	const jump = array[currIdx];
	const nextIdx = (currIdx + jump) % array.length;
	return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
}

array = [2, 3, 1, -4, -4, 2] // true
array1 = [2, 2, -1] // true
array2 = [1, -1, 1, -1] // false