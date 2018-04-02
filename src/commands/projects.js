const api = require('../api');
const { formatProject } = require('../format');

const main = console =>
  api
    .listProjects()
    .then(projects => projects.map(formatProject).join('\n'))
    .then(console.log)
    .catch(console.error);

module.exports = {
  command: 'projects',
  describe: 'list all projects',
  handler: () => main(console),
};
