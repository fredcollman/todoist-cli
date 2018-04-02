const { findBy, findByName } = require('./search');

module.exports = (api = require('./api')) => {
  const { listProjects, listAllTasks } = api;
  const getProject = ({ name }) => listProjects().then(findByName(name));

  const listTasks = async ({ projectName } = { projectName: null }) => {
    if (!projectName) {
      return await listAllTasks();
    }
    const project = await getProject({ name: projectName });
    return await listAllTasks({ project });
  };

  const getTask = ({ name }) => listTasks().then(findBy('content', name));

  return {
    listProjects,
    getProject,
    listTasks,
    getTask,
  };
};
