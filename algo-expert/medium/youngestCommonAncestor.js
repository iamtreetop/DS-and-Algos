class AncestralTree {
  constructor(name) {
    this.name = name;
    this.ancestor = null;
  }
}

function getYoungestCommonAncestor(topAncestor, descendantOne, descendantTwo) {
  const depthOne = getDescendantDepth(descendantOne, topAncestor);
	const depthTwo = getDescendantDepth(descendantTwo, topAncestor);
	if (depthOne > depthTwo) {
		return backtrackAncestralTree(descendantOne, descendantTwo, depthOne - depthTwo)
	} else {
		return backtrackAncestralTree(descendantTwo, descendantOne, depthTwo - depthOne)
	}
}

function getDescendantDepth(descendant, topAncestor) {
	let depth = 0;
	while (descendant !== topAncestor) {
		depth++;
		descendant = descendant.ancestor;
	}
	return depth;
}

function backtrackAncestralTree(lowerDescendant, highDescendant, diff) {
	while (diff > 0) {
		lowerDescendant = lowerDescendant.ancestor;
		diff--;
	}
	while (lowerDescendant !== highDescendant) {
		lowerDescendant = lowerDescendant.ancestor;
		highDescendant = highDescendant.ancestor;
	}
	return lowerDescendant;
}