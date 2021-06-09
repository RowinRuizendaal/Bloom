const Users = require('../models/user.js');
const Chats = require('../models/chat.js');
const bcrypt = require('bcrypt');
const ObjectId = require('mongoose').Types.ObjectId;

// Get data of one specific user by userID
async function checkValidUser(email, password) {
  const user = await Users.findOne({
    emailAddress: email,
  });

  // if user exist with email
  if (user) {
    const compareSalt = await bcrypt.compare(password, user.password);

    // If salt is true
    if (compareSalt) {
      return user;
    }
  }
  // no user has been found so return false
  return false;
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

// Get all users of DB, except the logged in user
async function getAllUsers(userID) {
  const users = await Users.find({ _id: { $ne: userID } }).catch((err) =>
    console.log(err)
  );
  return users;
}

// export to chats folder
async function getAllChats() {
  const chats = await Chats.find().catch((err) => console.log(err));
  
  return chats;
}

// Get chats by userID of the participants
async function getChatsById(userID) {
  const userChats = await Chats.find({
    participants: {
      $in: [userID],
    },
  });

  return userChats;
}

// Get data of one specific chat by chatID
async function findOneChat(chatID) {
  const chat = await Chats.findOne({ _id: chatID }).catch((err) =>
    console.log(err)
  );

  // return user data
  return chat;
}

// Add chat to DB
async function createChat(object) {
  const createdRoom = await Chats.create(object);

  // Returns roomID
  return createdRoom._id;
}

// Update chat
async function updateChat(chatID, newData) {
  await Chats.updateOne(
    {
      _id: ObjectId(chatID),
    },
    {
      $push: {
        messages: {
          sender: newData.sender,
          content: newData.content,
          time: newData.time,
        },
      },
    }
  );
}

module.exports = {
  checkValidUser,
  createUser,
  findOneUser,
  getAllUsers,
  getAllChats,
  getChatsById,
  findOneChat,
  createChat,
  updateChat,
};
