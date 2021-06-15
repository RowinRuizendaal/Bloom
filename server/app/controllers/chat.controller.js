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

/**
 * Stores current userID in global variable
 *
 * @param {String} chatID - ID of the current user
 *
 */

function setGlobal(id) {
  globalUserID = id;
  // console.log('[chat.controller.js:] ', globalUserID);
}

/**
 * Get all chats from user by userID
 *
 * @param {String} chatID - ID of the chatroom
 *
 * @return {Array} allChats - Array with all chats(objects) from user
 *
 */

async function handleChats(req, res) {
  // 3. Return data chat + participent data

  // 1. search in collection to the userID
  const userChats = await getChatsById(req.params.id);

  let allChats = [];

  // 2. get all chats from userID
  for (i = 0; i < userChats.length; i++) {
    let userChatUnique = userChats[i];

    let participantUserIDs = await userChats[i].participants;

    // Get each participantID of each chat object
    for (let i in participantUserIDs) {
      let partiUser;

      // Check if participantID is equal to current userID
      if (participantUserIDs[i] !== req.params.id) {
        // Create new chat environment
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

        allChats.push(wholeObject);
      } else {
        // nothing
      }
    }
  }

  return res.json(allChats);
}

/**
 * Checks if chat already exists, otherwise create chat environment
 *
 * @param {String} userID - ID of the current user
 * @param {String} participantID - ID of the participant
 *
 * @return {String} newChatID - ID of the new chatroom
 *
 */
async function handleCreateChat(req, res) {
  // 1. participants IDs
  const userID = globalUserID;
  const partID = req.params.id;

  // 2. Check if there is already a room that exists
  let check = await checkChatExist(userID, partID);

  if (check !== false) {
    // returns chatID
    return res.json(check);
  } else {
    // Create chat environment
    const chatObject = {
      request: { creater: globalUserID, accepted: false },
      participants: [partID, userID],
      messages: [],
    };

    // 3. Create chatRoom and returns roomID
    const newChatID = await createChat(chatObject);

    // 4. return roomID
    return res.json(newChatID);
  }
}

/**
 * Chat request handler - reject
 *
 * @param {String} chatID - ID of the chat
 *
 * @return {Boolean} true - Succesfull message of the action
 *
 */
async function handleDeleteChat(req, res) {
  const chatID = req.params.id;

  // 1. Find and delete chat
  await deleteChat(chatID);

  // 2. Return succesfull delete msg
  return res.json(true);
}

/**
 * Chat request handler - accept
 *
 * @param {String} createrID - ID of the creater of the chat
 * @param {String} chatID - ID of the chat
 *
 * @return {Boolean} true - Succesfull message of the action
 *
 */
async function handleAcceptChat(req, res) {
  const createrID = req.params.createrID;
  const chatID = req.params.chatID;

  // 1. find chat and update chat request
  await updateRequestChat(chatID, createrID);

  // 2. returns true
  return true;
}

module.exports = {
  handleChats,
  handleCreateChat,
  handleDeleteChat,
  handleAcceptChat,
  setGlobal,
};
