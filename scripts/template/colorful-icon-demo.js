const path = require('path');
const ejs = require('ejs');
const fs = require('fs-extra');

/**
 * @description 生成colorful-icon的demo模板
 * @param {string[]} list
 * @return {string}
 */
function demoTemplate(list) {
  return ejs.render(fs.readFileSync(path.join(__dirname, './colorful-icon-demo.ejs'), 'utf-8'), {
    demo: list.map(svg => `      <colorful-icon name="${path.parse(svg).name}" />`).join('\n')
  });
}

module.exports = demoTemplate;
