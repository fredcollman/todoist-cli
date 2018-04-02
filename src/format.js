const indentProject = project =>
  `${'   '.repeat(project.indent - 1)}- ${project.name}`;

const formatProjects = projects => projects.map(indentProject).join('\n');

const formatProject = project => `\
ID: ${project.id}
Name: ${project.name}`;

module.exports = {
  formatProject,
  formatProjects,
};
