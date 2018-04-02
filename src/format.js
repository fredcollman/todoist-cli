const formatProject = project =>
  `${'   '.repeat(project.indent - 1)}- ${project.name}`;

module.exports = {
  formatProject,
};
