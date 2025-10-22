const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // Remove line below and write your code here
  let sum = 0;
  const rows = matrix.length;
  const cols = matrix[0].length;

  const valid = new Array(cols).fill(true);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (valid[j]) {
        sum += matrix[i][j];
        if (matrix[i][j] === 0) {
          valid[j] = false;
        }
      }
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
