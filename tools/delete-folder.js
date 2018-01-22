const rimraf = require('rimraf');

function deleteFolder(path, message) {
  return new Promise(resolve => {
    rimraf(path, () => {
      console.log(message.cyan);
      resolve();
    });
  });
}

exports.deleteFolder = deleteFolder;