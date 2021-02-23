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

function getUniqueNums(array) {
  let set = new Set()
  for (const num of array) {
    set.add(num)
  }
  return set.size
}

// str = 'aabbccddef'
// array = [90,90,9,9,9,0,1,3,3,1]
// // console.log(getUniqueNums(str));

// // console.log(getStringCount(str));

this.item = "1";
setTimeout(function() {
  this.item = "2";
  console.log(this.item);
}, 0);

console.log(this.item)