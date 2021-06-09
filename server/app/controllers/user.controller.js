const bcrypt = require('bcrypt');
const saltRounds = 10;

const {
  checkValidUser,
  createUser,
  findOneUser,
  getAllUsers,
} = require('../helpers/db.helpers.js');

const { setGlobal } = require('./chat.controller.js');

// Login handler
async function handleLogin(req, res) {
  const user = await checkValidUser(req.body.emailAddress, req.body.password);

  if (user == null || user === false) {
    return res.sendStatus(400);
  } else {
    console.log('LOGIN by:', user._id);
    let id = user._id;
    globalUserID = id.toString();
    setGlobal(globalUserID);

    return res.status(200).json(user);
  }
}

// Register handler
function handleRegister(req, res) {
  // Salt the plain password
  const passwordHash = bcrypt.hashSync(req.body.password, saltRounds);

  const userObject = {
    firstName: req.body.firstName,
    surName: req.body.surName,
    emailAddress: req.body.emailAddress,
    password: passwordHash,
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
  // get all users except the userID
  const usersData = await getAllUsers(req.params.id);

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

module.exports = {
  handleLogin,
  handleRegister,
  handleUsers,
  handleUser,
};
