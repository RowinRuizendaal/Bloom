
const Users = require('../models/user.js');

// Get data of one specific user by userID
async function checkValidUser(email, password) {
  const user = await Users.findOne({
    emailAddress: email,
    password: password,
  });

  // return user data
  return user;
}

// Add user to DB
function createUser({
  firstName,
  surName,
  emailAddress,
  password,
  birthDate,
  town,
  gender,
  typeIllness,
  profileAvatar,
  about,
}) {
  Users.create({
    firstName: firstName,
    surName: surName,
    emailAddress: emailAddress,
    password: password,
    birthDate: birthDate,
    town: town,
    gender: gender,
    typeIllness: typeIllness,
    profileAvatar: profileAvatar,
    about: about,
  });
}

// Get data of one specific user by userID
async function findOneUser(userID) {
  const user = await Users.findOne({ _id: userID }).catch((err) =>
    console.log(err)
  );

  // return user data
  return user;
}

// Get all users of DB
async function getAllUsers() {
  const users = await Users.find().catch((err) => console.log(err));
  return users;
}

module.exports = {
  checkValidUser,
  createUser,
  findOneUser,
  getAllUsers,
};
