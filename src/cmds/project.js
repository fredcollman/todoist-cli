module.exports = {
  command: 'project',
  describe: 'manage projects',
  builder: yargs => yargs.commandDir('project_cmds'),
  handler: {},
};
