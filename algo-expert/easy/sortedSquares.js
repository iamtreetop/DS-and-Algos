//2 pointers
// time O(n) | space O(n)
function sortedSquaredArray(array) {	
	let resArr = new Array(array.length).fill(0);
	let left = 0;
	let right = array.length - 1;
	
	for (let i = array.length - 1; i >= 0; i--) {
		const leftValue = array[left];
		const rightValue = array[right];
		
		if (Math.abs(leftValue) > Math.abs(rightValue)) {
			resArr[i] = leftValue * leftValue;
			left++;
		} else {
			resArr[i] = rightValue * rightValue;
			right--;
		}
	}
	
	return resArr;
}


// time O(n log n) | space O(n) - where n is number of eles in input array
function sortedSquaredArray(array) {	
	let resArr = new Array(array.length).fill(0);
	
	for (let i = 0; i < array.length; i++) {
		const num = array[i];
		resArr[i] = num * num;
	}
	
	resArr.sort((a,b)=> a-b)
	return resArr
}