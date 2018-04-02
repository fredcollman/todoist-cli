module.exports = {
  command: 'project',
  describe: 'manage projects',
  builder: yargs => yargs.commandDir('project_cmds'),
  handler: require('./project_cmds/list').handler,
};
