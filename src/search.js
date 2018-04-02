const equalsCaseInsensitive = (a, b) => a.toLowerCase() === b.toLowerCase();
const findByName = name => items =>
  items.find(item => equalsCaseInsensitive(name, item.name));

module.exports = {
  findByName,
};
