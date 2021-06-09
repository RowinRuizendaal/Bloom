const Chats = require('../models/chat.js');
const ObjectId = require('mongoose').Types.ObjectId;
const {
  findOneUser,
  findOneChat,
  getAllChats,
  updateChat,
} = require('../helpers/db.helpers.js');

// global
let roomGlobal;
let globalUser;

//     if obj is not therer --> create one
// else: find object
async function joinRoomHandler(socket, server, userID, roomID) {
  socket.join(roomID);
  roomGlobal = roomID;
  globalUser = userID;

  // roomData
  const roomData = await getRoomData(roomID);

  // Participant data
  const participantID = roomData.participants;

  for (let i in participantID) {
    let partiUser;

    if (participantID[i] !== globalUser) {
      const userData = await findOneUser(participantID[i]);

      partiUser = userData;

      let wholeObject = {
        room: {
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
      console.log('Not the same');
    }
  }

  // Store in helpers folder
  async function getRoomData(roomID) {
    const dataRoom = await findOneChat(roomID);
    return dataRoom;
  }
}

// 1. user joins room on userID enemy
// 2. Push object to mesages array in DB
// 3. Emit event to client for cs rendering.
function chatHandler(server, roomID, sender, content, time) {
  const chatObject = {
    sender: sender,
    content: content,
    time: time,
  };

  // 2. Put data obj in chatObj in db
  updateChat(roomID, chatObject);

  server.to(roomID).emit('msgResponse', chatObject);
}

function leaveRoomHandler(roomID) {
  console.log('A user disconnected');
}

module.exports = {
  joinRoomHandler,
  chatHandler,
  leaveRoomHandler,
};
