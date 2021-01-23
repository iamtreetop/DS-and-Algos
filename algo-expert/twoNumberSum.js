function twoNumberSum(array, targetSum) {
    // brute force
    // let i = 0, j = 0
    // let sumsArr = [];
    // for (let i = 0; i < array.length - 1; i++) {
    // 	for (let j = i+1; j < array.length; j++) {
    // 		if (array[i] + array[j] === targetSum) {
    // 			sumsArr.push(array[i], array[j])
    // 		}
    // 	}
    // }
    // return sumsArr;

    const numSet = new Set();
    for (let num of array) {
        const diff = targetSum - num;
        if (numSet.has(diff)) {
            return [diff, num];
        } else {
            numSet.add(num);
        }
    }
    return [];
}
