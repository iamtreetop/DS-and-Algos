function spiralTraverse(array) {
  // declare empty resArr
	const resArr = [];
	let startRow = 0,
			endRow = array.length - 1;
	let startCol = 0,
			endCol = array[0].length - 1;
	
	while (startRow <= endRow && startCol <= endCol) {
		// top perimeter
		for (let col = startCol; col <= endCol; col++) {
			resArr.push(array[startRow][col])
		}
		// right perimeter
		for (let row = startRow + 1; row <= endRow; row++) {
			resArr.push(array[row][endCol]);
		} 
		// bottom perimeter
		for (let col = endCol - 1; col >= startCol; col--) {
			if (startRow === endRow) break;
			resArr.push(array[endRow][col]);
		}
		// left perimeter
		for (let row = endRow - 1; row > startRow; row--) {
			if (startCol === endCol) break;
			resArr.push(array[row][startCol]);
		}
		startRow++;
		endRow--;
		startCol++;
		endCol--;
	}
	return resArr;
}