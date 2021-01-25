function binarySearch(array, target) {
  if (array.length === 0) return -1;
  
  const midpoint = Math.floor(array.length / 2);
 
	if (array[midpoint] === target) {
		return midpoint;
	} else if (array[midpoint] > target) {
    return binarySearch(array.slice(0, midpoint), target);
	} else if (array[midpoint] < target) {
    const res = binarySearch(array.slice(midpoint + 1), target);
    return res === -1 ? -1 : res + midpoint + 1;
  } 
};
