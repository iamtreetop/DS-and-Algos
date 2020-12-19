// Given an array arr.  You can choose a set of integers and remove all the occurrences 
// of these integers in the array.

// Return the minimum size of the set so that at least half of the integers of the 
// array are removed.

var minSetSize = function(arr) {
    // initialize empty hash
    // iterate over array
        // create hash map where integer is key and value is #occurence
    // turn hash into array and reverse sort
    // iterate over values of the reverse sorted arr
        // count number of removed items until arr length >= target length
        // increment count
    // return count
    let countsHash = {};
    
    for (let i = 0; i < arr.length; i++) {
        if (countsHash[arr[i]]) {
            countsHash[arr[i]] += 1;
        } else {
            countsHash[arr[i]] = 1;
        }
    }
    
    let sortedCounts = Object.values(countsHash).sort((a,b) => b - a);

    let removedEles = 0;
    let counter = 0;
    let targetLength = arr.length / 2;
    
    for (let count of sortedCounts) {
        removedEles += count;
        counter += 1;
        if (removedEles >= targetLength) {
            break;
        }
    }
    return counter;
};

arr = [3,3,3,3,5,5,5,2,2,7]
console.log(minSetSize(arr))

// Input: arr = [3,3,3,3,5,5,5,2,2,7]
// Output: 2
// Explanation: Choosing {3,7} will make the new array [5,5,5,2,2] which has size 5 
// (i.e equal to half of the size of the old array).
// Possible sets of size 2 are {3,5},{3,2},{5,2}.
// Choosing set {2,7} is not possible as it will make the new array [3,3,3,3,5,5,5] 
// which has size greater than half of the size of the old array.

// Example 2:
// Input: arr = [7,7,7,7,7,7]
// Output: 1
// Explanation: The only possible set you can choose is {7}. This will make the new array empty.

// Example 3:
// Input: arr = [1,9]
// Output: 1

// Example 4:
// Input: arr = [1000,1000,3,7]
// Output: 1

// Example 5:
// Input: arr = [1,2,3,4,5,6,7,8,9,10]
// Output: 5