/**
 * this is a module mapper used by jest
 * it helps mock assets like css or png files when rendering a component to be saved in a snapshot
 */
const path = require('path');

module.exports = {
  process(src, filename) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  },
};
