// Finds the right object that is equal to the given id parameter
function findObject(id, array) {
    const correctObject = array.find((object) => {
        return object.participant.id == id;
    });
    return correctObject;
}

function findObjectTwo(id, array) {
    const correctObject = array.find((object) => {
        return object.participant.id == id;
    });
    let index = array.indexOf(correctObject);
    return [index, correctObject]
}

module.exports = { findObject, findObjectTwo };