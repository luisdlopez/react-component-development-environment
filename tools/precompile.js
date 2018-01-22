require('colors');
const rimraf = require('rimraf');
const deleteFolder = require('./delete-folder').deleteFolder;

Promise
  .all([
    deleteFolder('./types/src', 'types/src folder deleted'),
    deleteFolder('./types/stories', 'types/stories  folder deleted'),
    deleteFolder('./types/types', 'types/types folder deleted'),
    deleteFolder('./dist', 'dist folder deleted'),
    deleteFolder('./es', 'es folder deleted'),
    deleteFolder('./lib', 'lib folder deleted'),
  ])
  .then(() => console.log(''))
  .catch((err) => {
    if (err.stack) {
      console.error(err.stack.red);
    } else {
      console.error(err.toString().red);
    }
    process.exit(1);
  });

exports.deleteFolder = deleteFolder;
