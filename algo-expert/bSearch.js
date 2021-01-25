// O(log(n)) time | O(log(n)) space - where n length of input array
function binarySearchRecur(array, target) {
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

// O(log(n)) time | O(1) space - where n length of input array
function binarySearchIter(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const midpoint = Math.floor((left + right) / 2);

    if (array[midpoint] === target) {
      return midpoint;
    } else if (array[midpoint] < target) {
      left = midpoint + 1;
    } else {
      right = midpoint - 1;
    }
  }
  return -1;
};

