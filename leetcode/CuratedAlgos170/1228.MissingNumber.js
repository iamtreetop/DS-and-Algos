// In some array arr, the values were in arithmetic progression: the values 
// arr[i+1] - arr[i] are all equal for every 0 <= i < arr.length - 1.

// Then, a value from arr was removed that was not the first or last value 
// in the array.

// Return the removed value.

// time: O(n) 
// space: O(1)
var missingNumber = function(arr) {
  let idx = 0, largestSub = 0, commonSub = 0, res = -1
  for(let i=1; i<arr.length;i++){
    const prev = arr[i-1], curr = arr[i]
    const sub = Math.abs(prev-curr)
    if(sub > largestSub){
      largestSub = sub
      idx = i
    }else{
      commonSub = sub
    }
  }  
  if(arr[idx] > arr[idx-1]){
    res = arr[idx] - commonSub //if ascending
  }else{
    res = arr[idx] + commonSub //if descending
  }
  return res
};

// Example 1:
// Input: arr = [5,7,11,13]
// Output: 9
// Explanation: The previous array was [5,7,9,11,13].

// Example 2:
// Input: arr = [15,13,12]
// Output: 14
// Explanation: The previous array was [15,14,13,12].