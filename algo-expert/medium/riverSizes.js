// time: O(w*h) | space: O(w*h)
function riverSizes(matrix) {
	// initialize empty array, sizes
	// dulicate matrix and set all eles in that dupe matrix to false
	// walk over all nodes
		// if visited, continue
		// else traverse node
			// initialize counter to 0
			// use stack, initialize the start point to current node
			// DFS
				// if current node is visited, continue 
	const sizes = [];
	const visited = matrix.map(row => row.map(value => false))
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (visited[i][j]) continue;
			traverseNode(i, j, matrix, visited, sizes);
		}
	}
	return sizes;
}

function traverseNode(i, j, matrix, visited, sizes) {
	let currentRiverSize = 0;
	const stack = [[i, j]];
	while (stack.length) {
		const currentNode = stack.pop();
		i = currentNode[0];
		j = currentNode[1];
		if (visited[i][j]) continue;
		visited[i][j] = true;
		if (matrix[i][j] === 0) continue;
		currentRiverSize++;
		const unvisitedNeighbors = getUnvisitedNeighbors(i, j, matrix, visited);
		for (const neighbor of unvisitedNeighbors) {
			stack.push(neighbor);
		}
	}
	if (currentRiverSize > 0) sizes.push(currentRiverSize);
}

function getUnvisitedNeighbors(i, j, matrix, visited) {
	const unvisitedNeighbors = [];
	if (i > 0 && !visited[i - 1][j]) unvisitedNeighbors.push([i - 1, j]);
	if (i < matrix.length - 1 && !visited[i + 1][j]) unvisitedNeighbors.push([i + 1, j])
	if (j > 0 && !visited[i][j - 1]) unvisitedNeighbors.push([i, j - 1]);
	if (j < matrix[0].length - 1 && !visited[i][j + 1]) unvisitedNeighbors.push([i, j + 1]);
	return unvisitedNeighbors;
}

matrix = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];

// output : [1,2,2,2,5]