const api = require('../../api');
const { formatTasks } = require('../../format');

const main = console =>
  api
    .listTasks()
    .then(formatTasks)
    .then(console.log)
    .catch(console.error);

module.exports = {
  command: 'list',
  aliases: ['ls'],
  describe: 'list all tasks',
  handler: () => main(console),
};
