const getName = require('../helper/get-icon-name');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs-extra');

/**
 * @description 生成单个icon的模板
 * @param {string} name
 * @return {*}
 */
function template(name) {
  return ejs.render(fs.readFileSync(path.join(__dirname, './colorful-icon-item-demo.ejs'), 'utf-8'), {
    demo: `<${getName(name)} />`
  });
}

module.exports = template;
