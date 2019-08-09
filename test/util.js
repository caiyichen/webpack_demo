function add(x, y) {
  return x + y;
}

function changeName(person = {}, name) {
  const personObj = Object.assign({}, person);
  personObj.name = name;
  return personObj;
}

module.exports = {
  add,
  changeName
};
