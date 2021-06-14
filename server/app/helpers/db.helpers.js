const Users = require('../models/user.js');
const Chats = require('../models/chat.js');
const bcrypt = require('bcrypt');
const ObjectId = require('mongoose').Types.ObjectId;

/**
 * Get data of one specific user by userID
 *
 * @param {String} email - emailaddress of the login credentials
 * @param {String} password - password of the login credentials
 *
 * @return {Boolean} false - state of the action if no succeeded
 *
 */

async function checkValidUser(email, password) {
  const user = await Users.findOne({
    emailAddress: email,
  });

  // If user exist with email
  if (user) {
    const compareSalt = await bcrypt.compare(password, user.password);

    // If salt is true
    if (compareSalt) {
      return user;
    }
  }
  // No user has been found so return false
  return false;
}

/**
 * Create new user
 *
 * @param {Object} userCredentials - Data of the new registered user
 *
 */

async function createUser({
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
  let newUser = await Users.create({
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

  return newUser;
}

/**
 * Get data of one specific user by userID
 *
 * @param {String} userID - ID of the user
 *
 * @return {Object} user - Data of the user
 *
 */

async function findOneUser(userID) {
  const user = await Users.findOne({ _id: userID }).catch((err) =>
    console.log(err)
  );

  // Return user data
  return user;
}

/**
 * Get data of all users, except the current user
 *
 * @param {String} userID - ID of the user
 *
 * @return {Array} users - Data of all users
 *
 */

async function getAllUsers(userID) {
  const users = await Users.find({ _id: { $ne: userID } }).catch((err) =>
    console.log(err)
  );
  return users;
}

/**
 * Get all chats by userID of the participants
 *
 * @param {String} userID - ID of the user
 *
 * @return {Array} userChats - Chat data of the user
 *
 */

async function getChatsById(userID) {
  const userChats = await Chats.find({
    participants: {
      $in: [userID],
    },
  });

  // Return user chats
  return userChats;
}

/**
 * Get data of one specific chat by chatID
 *
 * @param {String} chatID - ID of the chatroom
 *
 * @return {Object} chat - Data of the chat
 *
 */

async function findOneChat(chatID) {
  const chat = await Chats.findOne({ _id: chatID }).catch((err) =>
    console.log(err)
  );

  // Return chat data
  return chat;
}

/**
 * Check if chats exists with the two participants
 *
 * @param {String} userID - ID of the currentUser
 * @param {String} partID - ID of the participant
 *
 * @return {Boolean} true/false - State of action
 *
 */

async function checkChatExist(userID, partID) {
  const chats = await getChatsById(userID);

  if (chats.length) {
    // Global variable - existing chatID
    let existingChatID;

    // If user has chats, take look at participants key in each object
    for (let i in chats) {
      let chatParticipants = chats[i].participants;

      let check = chatParticipants.includes(partID);

      if (check) {
        // Sets global variable to existing Chat ID
        existingChatID = chats[i]._id;
      } else {
        existingChatID = false;
      }
    }
    return existingChatID;
  }
  return false;
}

/**
 * Create chat environment
 *
 * @param {Object} object - Data for creating the chat
 *
 * @return {String} createdRoom._id - ID of the created chatroom
 *
 */

async function createChat(object) {
  const createdRoom = await Chats.create(object);

  // Returns roomID
  return createdRoom._id;
}

/**
 * Add new message to chat
 *
 * @param {String} chatID - ID of the chatroom
 * @param {Object} newData - Data of the new message
 *
 */

async function updateChatMessages(chatID, newData) {
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

/**
 * Deletes chat
 *
 * @param {String} chatID - ID of the chatroom
 *
 * @return {Boolean} true/false - State of the action
 *
 */

async function deleteChat(chatID) {
  await Chats.findOneAndDelete({ _id: ObjectId(chatID) });
  return true;
}

/**
 * Update chatrequest state to accepted
 *
 * @param {String} chatID - ID of the chatroom
 * @param {String} createrID - ID of the creater of the chatroom
 *
 */

async function updateRequestChat(chatID, createrID) {
  await Chats.updateOne(
    {
      _id: ObjectId(chatID),
    },
    {
      request: {
        creater: createrID,
        accepted: true,
      },
    }
  );
}

module.exports = {
  checkValidUser,
  createUser,
  findOneUser,
  getAllUsers,
  getChatsById,
  findOneChat,
  checkChatExist,
  createChat,
  updateChatMessages,
  deleteChat,
  updateRequestChat,
};
