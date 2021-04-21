/**
 * @description 打空格
 * @param {string} str
 * @return {string}
 */
function tab(str) {
  return str.replace(/^\$(\d+)/gim, (a, b) => ' '.repeat(b));
}

module.exports = tab;
