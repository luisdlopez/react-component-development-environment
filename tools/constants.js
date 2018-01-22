const path = require('path');
const repoRoot = path.resolve(__dirname, '../');
const srcRoot = path.join(repoRoot, 'compiled/src/');
const distRoot = path.join(repoRoot, 'dist/');
const libRoot = path.join(repoRoot, 'lib/');
const esRoot = path.join(repoRoot, 'es/');

module.exports = {
  repoRoot,
  srcRoot,
  distRoot,
  libRoot,
  esRoot,
};
