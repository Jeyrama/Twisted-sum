/*
Find the sum of the digits of all the 
numbers from 1 to N (both ends included).

Examples:
  # N = 4
  1 + 2 + 3 + 4 = 10

  # N = 10
  1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

  # N = 12
  1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51
*/


// Solution

const twistedSum = (n) => {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += String(i)
      .split('')
      .reduce((tot, el) => (tot += Number(el)), 0);
  }
  return sum;
};

// or