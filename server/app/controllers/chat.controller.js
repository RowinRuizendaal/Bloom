const {
  findOneUser,
  getAllChats,
  getChatsById,
  findOneChat,
  checkChatExist,
  createChat,
  deleteChat,
  updateRequestChat,
} = require('../helpers/db.helpers.js');

// Store userID globally for easier use
let globalUserID;

// Stores id in global variable
function setGlobal(id) {
  globalUserID = id;
}

// Get all chats from user by userID
async function handleChats(req, res) {
  // Get chats from collection
  // 1. search in collection to the userID
  // 2. get all objects with userID
  // 3. Return data chat + participent data

  const userChats = await getChatsById(req.params.id);

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
// async function handleChatParticipants(req, res) {
//   // get user data
//   const userData = await findOneUser(req.params.id);

//   const userName = {
//     firstName: userData.firstName,
//     surName: userData.surName,
//   };

//   // return data
//   return res.json(userName);
// }

async function handleCreateChat(req, res) {
  // 1. participants
  const userID = globalUserID;
  const partID = req.params.id;

  // 2. Check if there is already a room that exists
  let check = await checkChatExist(userID, partID);
  console.log('check is: ', check);
  if (check !== false) {
    return res.json(check);
  } else {
    // Make room
    const chatObject = {
      request: { creater: globalUserID, accepted: false },
      participants: [partID, userID],
      messages: [],
    };

    // 3. Create chatRoom and returns roomID
    const newRoomID = await createChat(chatObject);

    // 4. return roomID
    return res.json(newRoomID);
  }
}

async function handleDeleteChat(req, res) {
  const chatID = req.params.id;
  // 1. find chat
  // 2. delete chat
  await deleteChat(chatID);

  // 3. return succesfull delete msg
  return true;
}

async function handleAcceptChat(req, res) {
  const createrID = req.params.createrID;
  const chatID = req.params.chatID;

  // 1. find chat
  // 2.  set in db state to true
  await updateRequestChat(chatID, createrID);

  // 3. return succesfull delete msg
  return true;
}

module.exports = {
  handleChats,
  handleCreateChat,
  handleDeleteChat,
  handleAcceptChat,
  // handleChatParticipants,
  setGlobal,
};
