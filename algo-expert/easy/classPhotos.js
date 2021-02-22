// O(nlogn) time | O(1) space
function classPhotos(redShirtHeights, blueShirtHeights) {
	redShirtHeights.sort((a,b) => b - a);
	blueShirtHeights.sort((a,b) => b - a);
	
	const shortColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? "RED" : "BLUE";
  for (let idx = 0; idx < redShirtHeights.length; idx++) {
		const redShirtHeight = redShirtHeights[idx];
		const blueShirtHeight = blueShirtHeights[idx];
		
		if (shortColorInFirstRow === "RED") {
			if (redShirtHeight >= blueShirtHeight) return false;
		} else if (blueShirtHeight >= redShirtHeight) return false;
	}
	return true;
}

redShirtHeights = [5, 8, 1, 3, 4];
blueShirtHeights = [6, 9, 2, 4, 5];
// output: true