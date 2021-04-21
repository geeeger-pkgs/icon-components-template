const getName = require('../helper/get-icon-name');
const toCamel = require('../helper/to-camel');
const ejs = require('ejs');
const path = require('path');
const fs = require('fs-extra');

/**
 * @description 生成colorful-icon模板
 * @param {string[]} list
 * @return {string}
 */
function mainTemplate(list) {
  const svgs = list.map(svg => path.parse(svg));

  return ejs.render(fs.readFileSync(path.join(__dirname, './colorful-icon.ejs'), 'utf-8'), {
    importList: svgs
      .map(svg => 'import ' + toCamel(svg.name) + " from '../" + getName(svg.name) + "';")
      .join('\n'),
    listMap: svgs.map(svg => `  '${svg.name}': ${toCamel(svg.name)}`).join(',\n')
  });
}

module.exports = mainTemplate;
