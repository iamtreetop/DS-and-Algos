// time O(n)
// space O(n)
var stringShift = function(s, shift) {
  let chars = s.split('');
  for(let i = 0; i < shift.length; i++) {
    if(shift[i][0] === 0) {
      while(shift[i][1] > 0) {
        chars.push(chars.shift());
        shift[i][1]--;
      }
    } else {
      while(shift[i][1] > 0) {
        chars.unshift(chars.pop());
        shift[i][1]--;
      }
    }
  }
  return chars.join('');
};