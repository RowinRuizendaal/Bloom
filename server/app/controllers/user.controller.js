// const db = require('../models/index.js');
// const Users = db.users;

// Create and Save a new Tutorial
exports.create = (req, res) => {};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {};

// Find a single Tutorial with an id
exports.findOne = async(email) => {
    console.log(email);
    // const userData = await Users.findOne({ emailAddress: email });
    // return userData};
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {};