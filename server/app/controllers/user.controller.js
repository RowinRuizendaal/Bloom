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
} = require('../helpers/db.helpers.js');

const { findObject } = require('../helpers/helpers.js');

// Store userID globally for easier use
let globalUserID;

// Login handler
async function handleLogin(req, res) {
  const user = await checkValidUser(req.body.emailAddress, req.body.password);

  if (user == null || user === false) {
    return res.sendStatus(400);
  } else {
    console.log('logged in by', user._id);
    let id = user._id;
    let string = JSON.stringify(id);
    globalUserID = string;

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
  // Get chats from collection
  // 1. search in collection to the userID
  // 2. get all objects with userID
  // 3. Return data chat + participent data

  const userChats = await getChatsById(req.params.id);
  console.log('user chats:', userChats);

  let arr =[];

  for (i = 0; i < userChats.length; i++) {
    let userParti;
    // get data of users

    // participant ID van elk object
    let participantUserIDs = await userChats[i].participants;
    // console.table(participantUserIDs[0]);
    let participantOne = participantUserIDs[0];
    let participantTwo = participantUserIDs[1];

    const userDataOne = await findOneUser(participantOne);
    console.log('user1: ', userDataOne.firstName);

    const userDataTwo = await findOneUser(participantTwo);
    console.log('user2: ', userDataTwo.firstName);

    let idOne = userDataOne._id;
    console.log('user 1: ', idOne);
    let idTwo = userDataTwo._id;
    console.log('user 2: ', idTwo);

    console.log(globalUserID);

    if (idOne !== globalUserID) {
      console.log('zelfde 1: ', idOne);
      userParti = userDataOne;
    } else if (idTwo !== globalUserID) {
      userParti = userDataTwo;
      console.log('zelfde 2: ', idTwo);
    }

    let wholeObject = {
      participant: {
        firstName: userParti.firstName,
        surName: userParti.surName,
        id: userParti._id,
        profileAvatar: userParti.profileAvatar,
      },
      userChats,
    };
console.log(arr)
    arr.push(wholeObject)

  }

  // let object = {
  //   participant: {
  //     firstName: userParti.firstName,
  //     surName: userParti.surName,
  //     id: userParti._id,
  //     profileAvatar: userParti.profileAvatar,
  //   },
  //   userChats,
  // };
  console.table(arr);
  return res.json(arr);
}

// const participantUser = await findOneUser(participantUserID);
// // console.log('object: ', participantUser);

// // participant data object for front use
// participantUserObject = {
//     participants: [userChats[i].participants],
//     _id: userChats[i]._id,
//     messages: userChats[i].messages,
//     participant: {
//         firstName: participantUser.firstName,
//         surName: participantUser.surName,
//         profileAvatar: participantUser.profileAvatar,
//     },

// arr.push(participantUserObject);
// return res.json(arr);

// get chat data of one user with another person
// async function handleChatDetail(req, res) {
//     // const userData = await findOneUser(req.params.id);

//     let arr = [];

//     // 1. search data object with id

//     const chatObj = await findOneChat(req.params.id);
//     // console.log(chatObj);

//     let participants = chatObj.participants
//     for (i = 0; i < participants.length; i++) {

//         // console.log(participants)
//         // data opvragen per user
//         const userData = await findOneUser(participants[i]);
//         console.log('object: ', userData);

//         let wholeObject = {
//             participants: chatObj.participants,
//             _id: chatObj._id,
//             messages: chatObj.messages,
//             participant: {
//                 firstName: participants[i].firstName,
//                 surName: participants[i].surName,
//                 profileAvatar: participants[i].profileAvatar,
//             },
//         };
//         console.log(wholeObject)

//     }

//     // 2. get participant data
//     // const participantUser = await findOneUser(req.params.id);
//     // console.log('object: ', participantUser);

//     // participant data object for front use
//     // participantUserObject = {
//     //     participants: chatObj.participants,
//     //     _id: chatObj._id,
//     //     messages: chatObj.messages,
//     //     participant: {
//     //         firstName: participantUser.firstName,
//     //         surName: participantUser.surName,
//     //         profileAvatar: participantUser.profileAvatar,
//     //     },
//     // };

//     // arr.push(participantUserObject);

//     // // return
//     // return res.json(arr);

//     // const chatUserData = userData.chats;
//     // console.log(chatUserData);

//     // // Search the enemy in users chat data:
//     // const messagesData = findObject(req.params.id, chatUserData);

//     // return res.json(messagesData);
// }

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
  // handleChatDetail,
  handleChatParticipants,
};
