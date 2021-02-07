function minNumberOfCoinsForChange(n, denoms) {
  let table = new Array(n + 1).fill(Infinity);

  table[0] = 0;

	for (let coin of denoms) {
		for (let amount = 0; amount < table.length; amount++) {
			if (coin <= amount) {
				table[amount] = Math.min(table[amount], table[amount - coin] + 1);
			}
		}
	}
	return table[n] !== Infinity ? table[n] : -1
};

function minNumberOfCoinsForChange(n, denoms) {
  let table = new Array(n + 1).fill(Infinity);

  table[0] = 0;

  denoms.forEach(coin => {
    for (let coinValue = coin; coinValue < table.length; coinValue++) {
      let dpIndex = coinValue - coin;
      let attempt = table[dpIndex] + 1;
      if (attempt < table[coinValue]) table[coinValue] = attempt;
    };
  });
	return table[n] !== Infinity ? table[n] : -1
}