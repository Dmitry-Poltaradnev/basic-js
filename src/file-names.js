const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not use yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // Remove line below and write your code here
  const res = [];
  const use = {};

  for (let name of names) {
    if (!use[name]) {
      res.push(name);
      use[name] = 1;
    } else {
      let newName = `${name}(${use[name]})`;
      while (use[newName]) {
        use[name]++;
        newName = `${name}(${use[name]})`;
      }
      res.push(newName);
      use[newName] = 1;
      use[name]++;
    }
  }

  return res;
}

module.exports = {
  renameFiles
};
