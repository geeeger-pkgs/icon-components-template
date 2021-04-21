const ejs = require('ejs');
const path = require('path');
const fs = require('fs-extra');

/**
 * @description
 * @return {string}
 */
function style() {
  return ejs.render(fs.readFileSync(path.join(__dirname, './colorful-icon-style.ejs'), 'utf-8'));
}

module.exports = style;
