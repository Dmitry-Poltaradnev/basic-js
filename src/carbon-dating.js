const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (
    typeof sampleActivity !== 'string' || 
    !sampleActivity || 
    isNaN(+sampleActivity) || 
    +sampleActivity <= 0 || 
    +sampleActivity > MODERN_ACTIVITY
  ) {
    return false;
  }

  const activity = +sampleActivity;

  const age = Math.log(MODERN_ACTIVITY / activity) * HALF_LIFE_PERIOD / Math.LN2;

  return Math.ceil(age);
}

module.exports = {
  dateSample
};
