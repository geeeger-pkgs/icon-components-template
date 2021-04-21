/**
 * @description 移除svg中不必要的内容
 * @param {string} svgString
 * @return {string}
 */
function trim(svgString) {
  return svgString
    .replace(/\s+class=(["'])[^]*?\1/gi, '')
    .replace(/\s+t=(["'])[^]*?\1/gi, '')
    .replace(/\s+p-?id=(["'])[^]*?\1/gi, '')
    .replace(/\s+width=(["'])[^]*?\1/gi, ' width="100%" ')
    .replace(/\s+height=(["'])[^]*?\1/gi, ' height="100%" ')
    .replace(/\n$/gi, '');
}

module.exports = trim;
