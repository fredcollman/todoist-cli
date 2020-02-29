const fetch = require('node-fetch');
const qs = require('querystring');

const API_ROOT_URL = 'https://api.todoist.com/rest/v1';
const API_TOKEN = process.env.TODOIST_API_TOKEN;

const handleBadResponse = response => {
  throw new Error(
    `Failed due to ${response.statusText} (HTTP ${response.status})`
  );
};

const readResponse = async response =>
  response.ok ? await response.json() : handleBadResponse(response);

const apiGet = async (path, params = {}) => {
  const fullUrl = `${API_ROOT_URL}/${path}?${qs.stringify(params)}`;
  // console.debug(`GET ${fullUrl}`);
  return await fetch(fullUrl, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
    },
  }).then(readResponse);
};

const listProjects = () => apiGet('projects');
const listAllTasks = ({ project } = {}) =>
  project ? apiGet('tasks', { project_id: project.id }) : apiGet('tasks');

module.exports = {
  listProjects,
  listAllTasks,
};
