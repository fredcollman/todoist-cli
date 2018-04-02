const api = require('../../api');
const { formatProject } = require('../../format');
const { findByName } = require('../../search');

const main = console => argv =>
  api
    .listProjects()
    .then(findByName(argv.name))
    .then(formatProject)
    .then(console.log)
    .catch(console.error);

module.exports = {
  command: 'inspect <name>',
  describe: 'show details for a project',
  handler: main(console),
};
