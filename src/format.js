const formatProject = project =>
  `${'   '.repeat(project.indent - 1)}- ${project.name}`;

const formatProjects = projects => projects.map(formatProject).join('\n');

module.exports = {
  formatProject,
  formatProjects,
};
