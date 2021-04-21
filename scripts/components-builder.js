const path = require('path');
const fs = require('fs-extra');
const glob = require('glob');
const getName = require('./helper/get-icon-name');
const template = require('./template/colorful-icon-item');
const itemDemoTemplate = require('./template/colorful-icon-item-demo');
const mainTemplate = require('./template/colorful-icon');
const demoTemplate = require('./template/colorful-icon-demo');
const readmeTemplate = require('./template/colorful-icon-readme');
const styleTemplate = require('./template/colorful-icon-style');
const {
  getManifest,
  genManifest,
  updateManifest,
  diff,
  updateSvgNavigator
} = require('./helper/manifest');
const toCamel = require('./helper/to-camel');
const { toBase64 } = require('./helper/img');

function createMainComponent(list) {
  fs.emptyDirSync('src/colorful-icon');
  fs.writeFileSync(`src/colorful-icon/index.js`, mainTemplate(list));
  fs.writeFileSync(`src/colorful-icon/index.less`, styleTemplate());
  fs.mkdirSync(`src/colorful-icon/demo`);
  const demo = demoTemplate(list);
  fs.writeFileSync(`src/colorful-icon/demo/index.vue`, demo);
  fs.writeFileSync(`src/colorful-icon/README.md`, readmeTemplate(demo));
}



const actions = {
  remove(pathName) {
    const parsedPath = path.parse(pathName);
    console.log(`remove => src/${getName(parsedPath.name)}`);
    fs.removeSync(`src/${getName(parsedPath.name)}`);
  },
  update(pathName) {
    console.log('update => ' + pathName);
    const parsedPath = path.parse(pathName);

    fs.emptyDirSync(`src/${getName(parsedPath.name)}`);
    if (parsedPath.ext === '.svg') {
      const svgString = fs.readFileSync(pathName, 'utf-8');
      fs.writeFileSync(`src/${getName(parsedPath.name)}/index.vue`, template(svgString, parsedPath.name));
    } else {
      console.log('a', pathName)
      const base64 = toBase64(pathName);
      fs.writeFileSync(
        `src/${getName(parsedPath.name)}/index.vue`,
        template(`<div style="background-image: url('${base64}');"></div>`, parsedPath.name)
      );
    }

    fs.mkdirSync(`src/${getName(parsedPath.name)}/demo`);
    const demo = itemDemoTemplate(parsedPath.name)
    fs.writeFileSync(`src/${getName(parsedPath.name)}/demo/index.vue`, demo);
    fs.writeFileSync(`src/${getName(parsedPath.name)}/README.md`, readmeTemplate(demo, toCamel(getName(parsedPath.name))));
  },

};

glob('assets/img/*.@(png|jpeg|jpg|gif|svg)', (err, list) => {
  if (err) {
    console.error('Make colorful icon failed: ');
    throw err;
  }

  const manifest = getManifest('img');
  const newManifest = genManifest(list);

  const diffList = diff(manifest, newManifest);

  if (diffList.length) {
    diffList.forEach(item => {
      actions[item.type](item.path);
    });
    createMainComponent(list);
    updateManifest('img', newManifest);
    updateSvgNavigator('img', newManifest);
  }
});
