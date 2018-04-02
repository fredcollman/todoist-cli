const api = require('../../api');
const { formatProjects } = require('../../format');

const main = console =>
  api
    .listProjects()
    .then(formatProjects)
    .then(console.log)
    .catch(console.error);

module.exports = {
  command: 'list',
  aliases: ['ls'],
  describe: 'list all projects',
  handler: () => main(console),
};
