const {
  findOneUser,
  getAllChats,
  getChatsById,
  findOneChat,
  createChat,
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
  handleChats,
  handleCreateChat,
  // handleChatParticipants,
  setGlobal,
};
