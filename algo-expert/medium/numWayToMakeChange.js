// time = O(n*d) | space O(n) - where n is length on input array, d is # denoms
function numberOfWaysToMakeChange(n, denoms) {
  // DP - tabulation
  let table = new Array(n + 1).fill(0)
	
	table[0] = 1;
	
	for (let coin of denoms) {
		for (let amount = 1; amount < n + 1; amount++) {
			if (coin <= amount) {
				table[amount] += table[amount - coin];
			}
		}	
	}
	
  return table[n];
}

function numberOfWaysToMakeChange(n, denoms) {
  let table = new Array(n + 1).fill(0)
	
	table[0] = 1;
	
	denoms.forEach(coin => {
		for (let amount = 1; amount < n + 1; amount++) {
			if (coin <= amount) {
				table[amount] += table[amount - coin];
			}
		}	
	})
	
  return table[n];
}
