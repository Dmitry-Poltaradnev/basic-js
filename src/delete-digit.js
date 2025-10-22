const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // Remove line below and write your code here
  const digits = n.toString();
  let maxVal = 0;

  for (let i = 0; i < digits.length; i++) {
    const num = +(digits.slice(0, i) + digits.slice(i + 1));
    if (num > maxVal) maxVal = num;
  }
  return maxVal;
}

module.exports = {
  deleteDigit
};
