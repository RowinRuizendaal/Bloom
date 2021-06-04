// Finds the right object that is equal to the given id parameter
function findObject(id, array) {
  const correctObject = array.find((object) => {
    return object.participant.id == id;
  });
  return correctObject;
}

module.exports = { findObject };
