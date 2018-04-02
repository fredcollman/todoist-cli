require('yargs')
  .commandDir('./src/cmds')
  .demandCommand()
  .help().argv;
