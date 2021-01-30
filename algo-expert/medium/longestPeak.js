function longestPeak(array) {
  // declare longest peak
	// walk over array with while loop at idx 1
		// define peak
		// if no peak, continue
	// check how many idices
	let maxPeak = 0;
	let i = 0;
	
	while (i < array.length - 1) {
		const isPeak = array[i] > array[i - 1] && array[i] > array[i + 1]
		if (!isPeak) {
			i++;
			continue;
		}
		
		let left = i - 2;
		while (left >= 0 && array[left] < array[left + 1]) {
			left--;
		}
		let right = i + 2;
		while (right < array.length && array[right] < array[right - 1]) {
			right++;
		}
		
		const currPeak = right - left - 1;
		maxPeak = Math.max(maxPeak, currPeak);
		i = right;
	}
	return maxPeak;
}

array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3] // => 6 // 0, 10, 6, 5, -1, -3