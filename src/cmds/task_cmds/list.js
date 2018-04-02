const client = require('../../client');
const { formatTasks } = require('../../format');

const main = console => argv =>
  client()
    .listTasks({ projectName: argv.project })
    .then(formatTasks)
    .then(console.log)
    .catch(console.error);

module.exports = {
  command: 'list [project]',
  aliases: ['ls'],
  describe: 'list all tasks',
  handler: main(console),
};
