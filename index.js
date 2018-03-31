const fetch = require("node-fetch");

const API_ROOT_URL = "https://beta.todoist.com/API/v8";
const API_TOKEN = process.env.TODOIST_API_TOKEN;

fetch(`${API_ROOT_URL}/projects`, {
  headers: {
    Authorization: `Bearer ${API_TOKEN}`
  }
})
  .then(response => {
    if (response.ok) {
      return response.json().then(console.log);
    } else {
      return Promise.reject({
        status: response.status,
        statusText: response.statusText
      });
    }
  })
  .catch(console.error);
