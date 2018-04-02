const { findBy, findByName } = require('./search');

module.exports = (api = require('./api')) => {
  const { listProjects, listAllTasks } = api;
  const getProject = ({ name }) => listProjects().then(findByName(name));

  const listTasks = async ({ projectName } = { projectName: null }) => {
    const tasks = await listAllTasks();
    if (projectName) {
      const project = await getProject({ name: projectName });
      return tasks.filter(task => task.project_id === project.id);
    } else {
      return tasks;
    }
  };

  const getTask = ({ name }) => listTasks().then(findBy('content', name));

  return {
    listProjects,
    getProject,
    listTasks,
    getTask,
  };
};
