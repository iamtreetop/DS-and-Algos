// O(n) time - where n is the total # of elements in array, including sub arrays
// O(d) space - where d is the gretest depth of the special array
function productSum(array, multiplier = 1) {
  let sum = 0;
  // iterate over every element in array
  for (let ele of array) {
    // if the element is an array, recursively call
    if (Array.isArray(ele)) {
      sum += productSum(ele, multiplier + 1);
    } else {
      sum += ele;
    }
  }

  return sum * multiplier;
};

array = [5, 2, [7, -1], 3, [6, [-13, 8], 4]] // => 12;