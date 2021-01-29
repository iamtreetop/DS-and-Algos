// O(n) time | O(1) space
function moveElementToEnd(array, toMove) {
  // two pointers
  // while left pointer < right pointer
    // decrement right pointer until it is not a toMove #
    // if p1 === toMove#
      // increment p1++ 
  // return the array

  let p1 = 0;
  let p2 = array.length - 1;

  while (p1 < p2) {
    while (p1 < p2 & array[p2] === toMove) {
      p2--;
    }
    if (array[p1] !== toMove) {
      i++;
    }
    swap(p1, p2, array)
  }
  return array;
}

function swap(i, j, array) {
	const temp = array[j];
	array[j] = array[i];
	array[i] = temp;
}