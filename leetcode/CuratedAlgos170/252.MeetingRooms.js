var canAttendMeetings = function(intervals) {
  // sort meeting times by start time
  intervals.sort((a, b) => a[0] - b[0]);

  // check if any meeting times overlap (end i > start i+1)
  for (let i = 0; i < intervals.length - 1; i++) {
    const [start1, end1] = intervals[i];
    const [start2, end2] = intervals[i+1];
    if(start2 < end1) return false;
  }

  return true;
};