const fetch = require('node-fetch');

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

const listAllTasks = () => apiGet('tasks');

module.exports = {
  listProjects,
  listAllTasks,
};
