const indentProject = project =>
  `${'   '.repeat(project.indent - 1)}- ${project.name}`;

const formatProjects = projects => projects.map(indentProject).join('\n');

const formatProject = project => `\
ID: ${project.id}
Name: ${project.name}`;

const indentTask = task => `${'   '.repeat(task.indent - 1)}- ${task.content}`;

const formatTasks = tasks => tasks.map(indentTask).join('\n');

const formatTask = task => `\
ID: ${task.id}
Name: ${task.content}
URL: ${task.url}`;

module.exports = {
  formatProject,
  formatProjects,
  formatTasks,
  formatTask,
};
