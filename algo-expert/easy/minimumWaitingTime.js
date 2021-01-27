// O(nlogn) time | O(1) space - where n is the length of the array
function minimumWaitingTime(queries) {
  // sort the queries, smallest to largest
  // initialize a sum variable
  // walk over queries array
    // multiple current number * th emaoutn of numbers afetr that
  // return sum
  queries.sort((a,b) => a-b);
  let waitTime = 0;

  for (let i = 0; i < queries.length; i++) {
    const currTime = queries[i];
    const queriesLeft = queries.length - (i+1);

    waitTime += currTime * queriesLeft;
  }
  return waitTime;
};

queries = [3, 2, 1, 2, 6] // [ 1, 2, 2, 3, 6] => 17  // 17