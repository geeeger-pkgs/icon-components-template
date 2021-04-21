const ejs = require('ejs');
const path = require('path');
const fs = require('fs-extra');

/**
 * @description 生成colorful-icon的readme
 * @param {string} demo
 * @param {string | undefined} camelName
 * @return {string}
 */
function readmeTemplate(demo, camelName) {
  return ejs.render(fs.readFileSync(path.join(__dirname, './colorful-icon-readme.ejs'), 'utf-8'), {
    demo,
    camelName: camelName || 'ColorfulIcon'
  });
}

module.exports = readmeTemplate;
