const fetch = require('node-fetch');
const { findByName, findBy } = require('./search');

const API_ROOT_URL = 'https://beta.todoist.com/API/v8';
const API_TOKEN = process.env.TODOIST_API_TOKEN;

const handleBadResponse = response =>
  Promise.reject({
    status: response.status,
    statusText: response.statusText,
  });

const readResponse = response =>
  response.ok ? response.json() : handleBadResponse(response);

const listProjects = () =>
  fetch(`${API_ROOT_URL}/projects`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  }).then(readResponse);

const getProject = ({ name }) => listProjects().then(findByName(name));

const listAllTasks = () =>
  fetch(`${API_ROOT_URL}/tasks`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  }).then(readResponse);

const listTasks = ({ projectName } = { projectName: null }) => {
  if (!projectName) {
    return listAllTasks();
  }

  return Promise.all([getProject({ name: projectName }), listAllTasks()]).then(
    ([project, tasks]) => tasks.filter(task => task.project_id === project.id)
  );
};

const getTask = ({ name }) => listTasks().then(findBy('content', name));

module.exports = {
  listProjects,
  listTasks,
  getProject,
  getTask,
};
