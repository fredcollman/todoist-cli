const client = require('../../client');
const { formatTask } = require('../../format');

const main = console => argv =>
  client()
    .getTask({ name: argv.name })
    .then(formatTask)
    .then(console.log)
    .catch(console.error);

module.exports = {
  command: 'inspect <name>',
  describe: 'show details for a task',
  handler: main(console),
};
