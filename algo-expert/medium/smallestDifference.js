
function smallestDifference(arrayOne, arrayTwo) {
  // sort both arrays and use 1 pointers
  // keep track of smallest num, curr num, smallest pair
  // walk over both arrays with respective pointers
    // if arr1num === arr2num, return [arr1num, arr2num]
    // if arr1num < arr2num, set curr num to diff, increment p1
    // else arr1num > arr2num, set curr num to diff, increment p2
    // if curr num < small num, set small num to curr num, smallest pair
    
  // arr1 = [ -1, 3, 5, 10, 20, 28 ]
  // arr2 = [ 15, 17, 26, 134, 135 ]

  
};

// arrayOne = [-1, 5, 10, 20, 28, 3], 
// arrayTwo = [26, 134, 135, 15, 17]
// output = [28, 26]