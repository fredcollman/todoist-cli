const api = require('../api');

const main = console =>
  api
    .listProjects()
    .then(console.log)
    .catch(console.error);

module.exports = {
  command: 'projects',
  describe: 'list all projects',
  handler: () => main(console),
};
