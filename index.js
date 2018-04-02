require('yargs')
  .command(require('./src/commands/projects'))
  .demandCommand()
  .help().argv;
