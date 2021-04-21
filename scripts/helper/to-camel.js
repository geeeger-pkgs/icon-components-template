/**
 * @description 转为驼峰写法
 * @param {string} str
 * @return {string}
 */
function toCamel(str) {
  return str
    .split('-')
    .map(slice => slice.replace(/^\w/, v => v.toUpperCase()))
    .join('');
}

module.exports = toCamel;
