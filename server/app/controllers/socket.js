// const { globalUserID } = require('../controllers/user.controller.js');

const ObjectId = require('mongoose').Types.ObjectId;
const {
  findOneUser,
  findOneChat,
  getAllChats,
  updateChat,
} = require('../helpers/db.helpers.js');

const Chats = require('../models/chat.js');

exports.ioEvents = async (socket, server) => {
  let roomGlobal;
  let globalUser;

  socket.on('joinRoom', async ({ userID, roomID }) => {
    //  if obj is not therer --> create one
    // else: find object

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
  });

  // 1. user joins room on userID enemy
  // 2. Push object to mesages array in DB
  // 3. Emit event to client for cs rendering.

  socket.on('chat-message', async ({ roomID, sender, content, time }) => {
    const chatObject = {
      sender: sender,
      content: content,
      time: time,
    };

    // 2. Put data obj in chatObj in db
    updateChat(roomID, chatObject);

    server.to(roomID).emit('msgResponse', chatObject);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
};
