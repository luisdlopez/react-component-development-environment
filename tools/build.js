require('colors');
const lib = require('./build-lib');
const es = require('./build-es');
const dist = require('./build-dist');
const deleteFolder = require('./delete-folder').deleteFolder;

const targets = process.argv.slice(2);
const has = t => !targets.length || targets.includes(t);

console.log(`Building targets: ${targets.length ? targets.join(', ') : 'all'}\n`.green);

Promise
  .all([
    has('lib') && lib(),
    has('es') && es(),
    has('dist') && dist(),
  ])
  .then(() => console.log(''))
  .then(() => deleteFolder('./compiled', 'compiled folder deleted'))
  .then(() => console.log(''))
  .catch((err) => {
    if (err.stack) {
      console.error(err.stack.red);
    } else {
      console.error(err.toString().red);
    }
    process.exit(1);
  });
