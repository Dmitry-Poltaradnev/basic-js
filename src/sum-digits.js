const { NotImplementedError } = require('../lib');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let val = String(n).split('').map(Number);

  while (val.length > 1) {
    n = val.reduce((sum, d) => sum + d, 0);
    val = String(n).split('').map(Number);
  }

  return val[0];
}

module.exports = {
  getSumOfDigits
};
