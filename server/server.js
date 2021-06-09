const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const dbConnection = require('./app/config/db.connection.js');
const router = require('./app/routes/router.js');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:8080',
  },
});

const ObjectId = require('mongoose').Types.ObjectId;
const {
  findOneUser,
  findOneChat,
  getAllChats,
} = require('./app/helpers/db.helpers.js');
const { findObject, findObjectTwo } = require('./app/helpers/helpers.js');
const Users = require('./app/models/user.js');
const Chats = require('./app/models/chat.js');

app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded --> multipart when use of multer (files)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

// Sockets
let userData;
// let participantIDGlobal;
let roomGlobal;
let globalUser;

io.on('connection', (socket) => {
  console.log('A user connected');

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

        io.to(roomID).emit('roomData', {
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
    // console.log(chatObject);

    // 2. Put data obj in chatObj in db
    const test = await Chats.updateOne(
      {
        _id: ObjectId(roomID),
      },
      {
        $push: {
          messages: {
            sender: sender,
            content: content,
            time: time,
          },
        },
      }
    );

    console.log(test);

    io.to(roomID).emit('msgResponse', chatObject);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

app.use(express.static(__dirname + '/public/'));

// Handle SPA
app.get(/.*/, (req, res) =>
  res.sendFile(path.resolve(__dirname, 'public/index.html'))
);

// set port, listen for requests
const PORT = process.env.PORT || 5000;
http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
