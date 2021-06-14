/**
 * Finds the right object that is equal to the given id parameter
 *
 * @param {String} id - Id (user/chat/participant)
 * @param {Array} array - Array of objects
 * @return {Object} object - found object
 *
 */

function findObject(id, array) {
  const correctObject = array.find((object) => {
    return object.participant.id == id;
  });
  return correctObject;
}

/**
 * Finds the right object that is equal to the given id parameter
 *
 * @param {String} id - Id (user/chat/participant)
 * @param {Array} array - Array of objects
 * @return {String} index - index of object
 * @return {Object} object - found object
 *
 */

function findObjectTwo(id, array) {
  const correctObject = array.find((object) => {
    return object.participant.id == id;
  });
  let index = array.indexOf(correctObject);
  return [index, correctObject];
}

module.exports = { findObject, findObjectTwo };
