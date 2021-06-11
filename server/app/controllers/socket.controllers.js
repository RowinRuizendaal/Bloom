const {
  findOneUser,
  findOneChat,
  updateChatMessages,
} = require('../helpers/db.helpers.js');

// Global variables
let roomGlobal;
let globalUser;

/**
 * User joins room
 *
 * @param {Object} socket - socket object
 * @param {String} server - socket server (IO)
 * @param {String} userID - ID of the current user
 * @param {String} roomID - ID of the chatroom
 *
 */

async function joinRoomHandler(socket, server, userID, roomID) {
  socket.join(roomID);
  roomGlobal = roomID;
  globalUser = userID;

  // Data of a chatroom
  const roomData = await findOneChat(roomID);

  // Participant data
  const participantID = roomData.participants;

  for (let i in participantID) {
    let partiUser;

    if (participantID[i] !== globalUser) {
      const userData = await findOneUser(participantID[i]);

      partiUser = userData;

      let wholeObject = {
        room: {
          request: {
            creater: roomData.request.creater,
            accepted: roomData.request.accepted,
          },
          participants: roomData.participants,
          _id: roomData._id,
          messages: roomData.messages,
        },
        participant: {
          firstName: partiUser.firstName,
          surName: partiUser.surName,
          profileAvatar: partiUser.profileAvatar,
          id: partiUser.id,
        },
      };

      server.to(roomID).emit('roomData', {
        room: wholeObject.room,
        participant: wholeObject.participant,
      });
    } else {
      // console.log('Not the same');
    }
  }
}

/**
 * New chat message handler
 *
 * @param {String} server - socket server (IO)
 * @param {String} roomID - ID of the chatroom
 * @param {String} sender - ID of the sender of the message
 * @param {String} content - Content of the message
 * @param {String} time - Time of the message
 *
 * @return {Object} messageObject - Object with all content of the new message
 */

function newMessageHandler(server, roomID, sender, content, time) {
  const messageObject = {
    sender: sender,
    content: content,
    time: time,
  };

  // 2. Put data obj in chatObj in db
  updateChatMessages(roomID, messageObject);

  // Return the new message to chatroom
  server.to(roomID).emit('newMessage', messageObject);
}

/**
 * Handles when user leaves chatroom
 *
 */

function leaveRoomHandler(roomID) {
  console.log('A user disconnected');
}

module.exports = {
  joinRoomHandler,
  newMessageHandler,
  leaveRoomHandler,
};
