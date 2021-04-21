const trim = require('../helper/svg-trim');
const getName = require('../helper/get-icon-name');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs-extra');

/**
 * @description 生成单个icon的模板
 * @param {string} svgString
 * @param {string} name
 * @param {boolean | undefined} avoidTrim
 * @return {*}
 */
function template(svgString, name, avoidTrim) {
  return ejs.render(fs.readFileSync(path.join(__dirname, './colorful-icon-item.ejs'), 'utf-8'), {
    name: getName(name),
    content: (avoidTrim ? svgString : trim(svgString)) + '\n'
  });
}

module.exports = template;
