const bcrypt = require('bcrypt');
const saltRounds = 10;

const {
  checkValidUser,
  createUser,
  findOneUser,
  getAllUsers,
  getAllChats,
  getChatsById,
  findOneChat,
  createChat,
} = require('../helpers/db.helpers.js');

const { findObject } = require('../helpers/helpers.js');

// Store userID globally for easier use
let globalUserID;
// let user = {
//   socketID: globalUserID
// }

// Login handler
async function handleLogin(req, res) {
  const user = await checkValidUser(req.body.emailAddress, req.body.password);

  if (user == null || user === false) {
    return res.sendStatus(400);
  } else {
    console.log('logged in by', user._id);
    let id = user._id;
    // let string = JSON.stringify(id);
    globalUserID = id.toString();

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

// Get all chats from user by userID
async function handleChats(req, res) {
  // Get chats from collection
  // 1. search in collection to the userID
  // 2. get all objects with userID
  // 3. Return data chat + participent data

  const userChats = await getChatsById(req.params.id);
  // console.log('user chats:', userChats);

  let arr = [];

  for (i = 0; i < userChats.length; i++) {
    let userChatUnique = userChats[i];

    // participant ID van elk object
    let participantUserIDs = await userChats[i].participants;

    for (let i in participantUserIDs) {
      let partiUser;

      if (participantUserIDs[i] !== globalUserID) {
        const userData = await findOneUser(participantUserIDs[i]);
        partiUser = userData;

        let wholeObject = {
          participant: {
            firstName: partiUser.firstName,
            surName: partiUser.surName,
            id: partiUser._id,
            profileAvatar: partiUser.profileAvatar,
          },
          userChatUnique,
        };
        arr.push(wholeObject);
      } else {
      }
    }
  }

  return res.json(arr);
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

async function handleCreateChat(req, res) {
  // 1. partiicpants
  const userID = globalUserID;
  const partID = req.params.id;

  // 2. Make room
  const chatObject = {
    participants: [partID, userID],
    messages: [],
  };

  // 3. Create chatRoom and returns roomID
  const newRoomID = await createChat(chatObject);

  // 4. return roomID
  return res.json(newRoomID);
}

module.exports = {
  handleLogin,
  handleRegister,
  handleUsers,
  handleUser,
  handleChats,
  // handleChatDetail,
  handleCreateChat,
  handleChatParticipants,
};
