const opn = require('opn');
const client = require('../../client');

const main = console => argv =>
  client()
    .getTask({ name: argv.name })
    .then(task => opn(task.url))
    .catch(console.error);

module.exports = {
  command: 'browse <name>',
  describe: 'open task in web browser',
  handler: main(console),
};
