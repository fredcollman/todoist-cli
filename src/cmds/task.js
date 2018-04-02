module.exports = {
  command: 'task',
  describe: 'manage tasks',
  builder: yargs => yargs.commandDir('task_cmds'),
  handler: {},
};
