const {
  checkValidUser,
  createUser,
  findOneUser,
  getAllUsers,
} = require('../helper/helpers.js');

// Login handler
async function handleLogin(req, res) {
  const user = await checkValidUser(req.body.emailAddress, req.body.password);

  console.log(user)

  if (user == null) {
    return res.sendStatus(400);
  } else {
    return res.status(200).json(user);
  }
}

// Add user to db
function handleRegister(req, res) {
  const userObject = {
    firstName: req.body.firstName,
    surName: req.body.surName,
    emailAddress: req.body.emailAddress,
    password: req.body.password,
    birthDate: req.body.birthDate,
    town: req.body.town,
    gender: req.body.gender,
    typeIllness: req.body.typeIllness,
    profileAvatar: req.body.profileAvatar,
    about: req.body.about,
  };

  console.log('User register data: ', userObject);
  createUser(userObject);
}

// Get all users
async function handleUsers(req, res) {
  // get all users
  const usersData = await getAllUsers();

  // return data
  return res.json(usersData);
}

// Get one specific user by userID
async function handleUser(req, res) {
  // get user data
  const userData = await findOneUser(req.params.id);

  // return data
  return res.json(userData);
}

// Get all chats from user by userID
async function handleChats(req, res) {
  // get user data
  const userData = await findOneUser(req.params.id);

  const chatsData = userData.chats;
  console.log(chatsData);

  // return data
  return res.json(chatsData);
}

// Get all participant data per chat
async function handleChatParticipants(req, res) {
  // get user data
  const userData = await findOneUser(req.params.id);

  const userName = {
    firstName: userData.firstName,
    surName: userData.surName,
  };

  // return data
  return res.json(userName);
}

module.exports = {
  handleLogin,
  handleRegister,
  handleUsers,
  handleUser,
  handleChats,
  handleChatParticipants,
};

// // const db = require('../models/index.js');
// // const Users = db.users;

// // Create and Save a new Tutorial
// exports.create = (req, res) => {};

// // Retrieve all Tutorials from the database.
// exports.findAll = (req, res) => {};

// // Find a single Tutorial with an id
// exports.findOne = async(email) => {
//     console.log(email);
//     // const userData = await Users.findOne({ emailAddress: email });
//     // return userData};
// };

// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {};

// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {};

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {};

// // Find all published Tutorials
// exports.findAllPublished = (req, res) => {};
