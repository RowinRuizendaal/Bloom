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

const { findOneUser } = require('./app/helpers/db.helpers.js');
const { findObject, findObjectTwo } = require('./app/helpers/helpers.js');
const Users = require('./app/models/user.js');

app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded --> multipart when use of multer (files)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

// Sockets
let userData;
let enemyGlobal;
let roomGlobal;

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('joinRoom', async ({ userID, enemyID }) => {
    //  if obj is not therer --> create one
    // else: find object
    enemyGlobal = enemyID;

    const room = await searchRoom(userID, enemyID);
    console.log('room = ', room.participant.id);
    roomGlobal = room;

    socket.join(room.participant.id);

    io.to(room.participant.id).emit('chatHistory', {
      chatHistory: room.messages,
    });

    // Store in helpers folder
    async function searchRoom(userID, enemyID) {
      const user = await findOneUser(userID);
      userData = user;
      const chatsData = user.chats;

      const enemyChatRoom = enemySearcher(enemyID, chatsData);

      return enemyChatRoom;

      // search enemy
      function enemySearcher(enemyID, array) {
        const correctObject = array.find((object) => {
          return object.participant.id == enemyID;
        });
        return correctObject;
      }
    }
  });

  // 1. user joins room on userID enemy
  // 2. Push object to mesages array in DB
  // 3. Emit event to client for cs rendering.

  socket.on('chat-message', ({ participant, sender, content, time }) => {
    const chatObject = {
      sender: sender,
      content: content,
      time: time,
    };
    // // console.log(chatObject)
    // console.log('all chats: ', userData.chats);

    // const correctChatIndex = findObjectTwo(participant, userData.chats);
    // console.log(correctChatIndex);

    // // Find messages array
    // // const messagesArray = correctChatIndex.messages;
    // // console.log('arr: ',messagesArray);
    // // messagesArray.push(chatObject);

    // // get arr from db
    // findOneUser(userData._id).find({ 'chats.participant.id': participant });
    // .findOneAndUpdate({})
    //   $push:{}
    // })

    // })
    // push obj to db

    // 1. put in db
    // 2. send message back to whole room (userID and enemyID)

    io.to(roomGlobal.participant.id).emit('msgResponse', chatObject);
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
