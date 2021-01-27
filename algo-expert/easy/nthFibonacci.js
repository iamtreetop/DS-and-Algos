// O(n) time | O(1) space;
function getNthFibIter(n, memo={}) {
	let cache = [0, 1];
  let counter = 3;

  while (n >= counter) {
    const nextNum = cache[0] + cache[1];
    cache[0] = cache[1];
    cache[1] = nextNum;
    counter++;
  }
  if (n > 1) {
    return cache[1];
  } else {
    return cache[0];
  }
};

// O(n) time | O(n) space;
function getNthFibRecur(n, memo={}) {
  if (n in memo) return memo[n];
  if (n === 1) return 0;
  if (n === 2) return 1;
  
  memo[n] = getNthFib(n - 1, memo) + getNthFib(n - 2, memo);
  return memo[n];
};

// O(2^n) time | O(n) space;
function getNthFibRecur(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;

  return getNthFib(n - 1) + getNthFib(n - 2);
};