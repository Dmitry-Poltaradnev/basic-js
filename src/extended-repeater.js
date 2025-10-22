const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  // Remove line below and write your code here
  str = String(str);
  const addition = options.hasOwnProperty('addition') ? String(options.addition) : '';

  const repeatTimes = options.repeatTimes || 1;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const separator = options.separator || '+';
  const additionSeparator = options.additionSeparator || '|';

  const additionPart = Array(additionRepeatTimes)
    .fill(addition)
    .join(additionSeparator);

  const fullString = Array(repeatTimes)
    .fill(str + additionPart)
    .join(separator);

  return fullString;
}

module.exports = {
  repeater
};
