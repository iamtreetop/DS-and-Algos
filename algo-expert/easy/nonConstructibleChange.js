// O(nlogn) time | O(1) space - where n is the number of coins
function nonConstructibleChange(coins) {
  // sort the input array in place
	// walk through array
	// check value of coin
		// if coin is >  current change, return current change + 1
		// else add value of coin to current change
	// return currne change + 1
	
	coins.sort((a, b) => a - b);
	
	let currentChange = 0;
	for (const coin of coins) {
		if (coin > currentChange + 1) return currentChange + 1;
		currentChange += coin
	}
	
  return currentChange + 1;
}

coins = [5, 7, 1, 1, 2, 3, 22]
// outpout: 20

// coins = [1, 2, 5]
// outpout: 4