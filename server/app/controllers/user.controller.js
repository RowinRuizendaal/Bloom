const bcrypt = require('bcrypt');
const saltRounds = 10;

const {
  checkValidUser,
  createUser,
  findOneUser,
  getAllUsers,
} = require('../helpers/db.helpers.js');

const { setGlobal } = require('./chat.controller.js');

let anotherGlobalUserID;

/**
 * Login handler - validates the user's credentials
 *
 * @param {String} emailAddress - EmailAddress of the login action
 * @param {String} password - Password of the login action
 *
 * @return {HTTPStatusCode} 200/400 - StatusCode of the HTTP response
 * @return {Object} user - Data of the user
 *
 */

async function handleLogin(req, res) {
  const user = await checkValidUser(req.body.emailAddress, req.body.password);

  if (user == null || user === false) {
    return res.sendStatus(400);
  } else {
    console.log('LOGIN by:', user._id);
    let id = user._id;
    let globalUserID = id.toString();
    anotherGlobalUserID = globalUserID
    setGlobal(anotherGlobalUserID);

    return res.status(200).json(user);
  }
}

/**
 * Register handler - creates the user
 *
 * @param {String} firstName - firstName of the register process
 * @param {String} surName - surName of the register process
 * @param {String} emailAddress - emailAddress of the register process
 * @param {String} password - Password of the register process (will be hashed)
 * @param {Date} birthDate - birthDate of the register process
 * @param {String} town - town of the register process
 * @param {String} gender - gender of the register process
 * @param {String} typeIllness - typeIllness of the register process
 * @param {String} profileAvatar - profileAvatar of the register process
 * @param {String} about - about of the register process
 *
 */

async function handleRegister(req, res) {
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

  console.log('User registered - data: ', userObject);
  let newUser = await createUser(userObject);

  // Set global userID to userID
  let globalUserID = newUser._id.toString();
  anotherGlobalUserID  = globalUserID
  setGlobal(globalUserID);

  return res.json(newUser)
}

/**
 * Get all users data except the current user
 *
 * @param {String} userID - ID of the current user
 *
 * @return {Array} usersData - Data of all users
 *
 */

async function handleUsers(req, res) {
  // get all users except the userID
  const usersData = await getAllUsers(anotherGlobalUserID);

  // return data
  return res.json(usersData);
}

/**
 * Get one specific user by userID
 *
 * @param {String} userID - ID of the user
 *
 * @return {Object} userData - Data of specific user
 *
 */

//
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
