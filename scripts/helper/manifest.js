const fs = require('fs-extra');
const md5 = require('md5-file');
const path = require('path');
const getName = require('./get-icon-name');
const toCamel = require('./to-camel');

function getManifest(prefix) {
  fs.ensureFileSync(`assets/${prefix}-manifest.json`);

  let result = {};

  try {
    result = JSON.parse(fs.readFileSync(`assets/${prefix}-manifest.json`));
  } catch (e) {
    // nothing
  }

  return result;
}

function genManifest(list) {
  const map = {};
  list.forEach(pathName => {
    map[pathName] = md5.sync(pathName);
  });

  return map;
}

function updateManifest(prefix, obj) {
  fs.writeFileSync(`assets/${prefix}-manifest.json`, JSON.stringify(obj));
}

function updateSvgNavigator(prefix, obj) {
  const map = Object.keys(obj).map(svgPath => {
    const { name } = path.parse(svgPath);
    const pathName = getName(name);
    const camelName = toCamel(pathName);
    return {
      path: pathName,
      title: `${camelName} 彩色图标`
    }
  })
  fs.writeFileSync(`assets/${prefix}-navigator.json`, JSON.stringify(map));
}

function diff(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  const set = new Set([...keys1, ...keys2]);

  const remove = keys1
    .filter(x => !(new Set([...keys2])).has(x))
    .map(key => ({
      type: 'remove',
      path: key,
      md5: obj1[key]
    }));

  const add = keys2
    .filter(x => !(new Set([...keys1])).has(x))
    .map(key => ({
      type: 'update',
      path: key,
      md5: obj2[key]
    }));

  const update = Array.from(set)
    .filter(x => obj1[x] !== obj2[x] && !obj2[x] && !obj1[x])
    .map(key => ({
      type: 'update',
      path: key,
      md5: obj2[key]
    }));

  return [...remove, ...add, ...update];
}

exports.getManifest = getManifest;

exports.genManifest = genManifest;

exports.updateManifest = updateManifest;

exports.diff = diff;

exports.updateSvgNavigator = updateSvgNavigator;
