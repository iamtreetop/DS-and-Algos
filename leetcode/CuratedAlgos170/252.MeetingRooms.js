var canAttendMeetings = function(intervals) {
  // sort meeting times by start time
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  
  // check if any meeting times overlap (end i > start i+1)
  for (let i = 0; i < intervals.length-1; i++)   
    if (intervals[i][1] > intervals[i+1][0]) {
      return false;
    }
  return true;
};