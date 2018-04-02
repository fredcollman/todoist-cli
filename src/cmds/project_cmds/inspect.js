const client = require('../../client');
const { formatProject } = require('../../format');

const main = console => argv =>
  client()
    .getProject({ name: argv.name })
    .then(formatProject)
    .then(console.log)
    .catch(console.error);

module.exports = {
  command: 'inspect <name>',
  describe: 'show details for a project',
  handler: main(console),
};
