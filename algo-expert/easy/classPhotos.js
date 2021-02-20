function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a,b) => b - a);
	blueShirtHeights.sort((a,b) => a - b);
	
	const shortColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? "RED" : "BLUE";
  for (let idx = 0; idx < redShirtHeights.length; idx++) {
		const redShirtHeights = redShirtHeights[idx];
		const blueShirtHeights = blueShirtHeights[idx];
		
		if (shortColorInFirstRow === "RED") {
			if (redShirtHeights >= blueShirtHeights) return false;
		} else if (blueShirtHeights >= redShirtHeights) return false;
	}
	return true;
};

redShirtHeights = [5, 8, 1, 3, 4];
blueShirtHeights = [6, 9, 2, 4, 5];
// output: true