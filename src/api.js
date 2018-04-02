const fetch = require('node-fetch');

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

module.exports = {
  listProjects,
};
