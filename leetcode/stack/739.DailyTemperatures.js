// Given a list of daily temperatures T, return a list such that, for each day 
// in the input, tells you how many days you would have to wait until a warmer 
// temperature. If there is no future day for which this is possible, put 0 instead.

// For example, given the list of temperatures 
// T = [73, 74, 75, 71, 69, 72, 76, 73], 
// output = [1, 1, 4, 2, 1, 1, 0, 0].

var dailyTemperatures = function (T) {
  // initialize an array filled with 0's
  // initialize stack data structure
  // walk over array backwards
    // while current temperature >= top of stack, keep popping of stack
    // if stack is empty, resArr is 0
    // else resArr[i] = difference of top of stack item and i
    // push current temp to stack
  // return resArr
  let resArr = new Array(T.length).fill(0)
  let stack = [];
  
  for (let i=T.length-1;i>=0;i--) {
    while(T[i] >= T[stack[stack.length-1]]) {
      stack.pop();
    }
    if (stack.length === 0) { 
      resArr[i] = 0;
    } else { 
      resArr[i] = stack[stack.length-1] - i
    };
    stack.push(i);
  }  
  return resArr
};

// Note: The length of temperatures will be in the range [1, 30000]. 
// Each temperature will be an integer in the range [30, 100].