const opn = require('opn');
const api = require('../../api');

const main = console => argv =>
  api
    .getTask({ name: argv.name })
    .then(task => opn(task.url))
    .catch(console.error);

module.exports = {
  command: 'browse <name>',
  describe: 'open task in web browser',
  handler: main(console),
};
