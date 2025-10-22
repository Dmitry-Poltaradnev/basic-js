const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  // Remove line below and write your code here
  let encod = '';
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      encod += (count > 1 ? count : '') + str[i];
      count = 1;
    }
  }
  return encod;
}

module.exports = {
  encodeLine
};
