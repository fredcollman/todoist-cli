const equalsCaseInsensitive = (a, b) =>
  a != undefined && b != undefined && a.toLowerCase() === b.toLowerCase();
const findBy = (attr, value) => items =>
  items.find(item => equalsCaseInsensitive(value, item[attr]));
const findByName = name => findBy('name', name);

module.exports = {
  findBy,
  findByName,
};
