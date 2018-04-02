const fetch = require('node-fetch');
const { findByName, findBy } = require('./search');

const API_ROOT_URL = 'https://beta.todoist.com/API/v8';
const API_TOKEN = process.env.TODOIST_API_TOKEN;

const handleBadResponse = response => {
  throw new Error({
    status: response.status,
    statusText: response.statusText,
  });
};

const readResponse = async response =>
  response.ok ? await response.json() : handleBadResponse(response);

const apiGet = path =>
  fetch(`${API_ROOT_URL}/${path}`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  }).then(readResponse);

const listProjects = () => apiGet('projects');

const getProject = ({ name }) => listProjects().then(findByName(name));

const listAllTasks = () => apiGet('tasks');

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

module.exports = {
  listProjects,
  listTasks,
  getProject,
  getTask,
};
