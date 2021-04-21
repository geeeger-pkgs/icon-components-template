const fs = require('fs-extra');
const path = require('path');

function getExt(sourcePath) {
  let ext = path
    .parse(sourcePath)
    .ext.replace('.', '')
    .toLowerCase();

  if (ext === 'jpg') {
    ext = 'jpeg';
  }
  return ext;
}

function toBase64(pathName) {
  let result = '';
  const ext = getExt(pathName);
  try {
    result = fs.readFileSync(pathName, 'base64');
  } catch (e) {
    console.log(`Parse Error: ${pathName}`);
    console.log(e);
  }
  return `data:image/${ext};base64,${result}`;
}

exports.toBase64 = toBase64;

exports.getExt = getExt;

