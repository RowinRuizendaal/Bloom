const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const dbConnection = require('./app/config/db.connection.js');
const router = require('./app/routes/router.js');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded --> multipart when use of multer (files)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

// Sockets

io.on('connection', (socket) => {
  console.log('A user connected');

  // socket.emit('connections', Object.keys(io.sockets.connected).length);

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });

  // to global mongoose ID
  io.broadcast.emit('chat-message', {
    message: 'hoi',
  });

  socket.on('chat-message', (data) => {
    console.log(data);
    socket.broadcast.emit('chat-message', data);
  });

  // socket.on('typing', (data) => {
  //     socket.broadcast.emit('typing', (data));
  // });

  // socket.on('stopTyping', () => {
  //     socket.broadcast.emit('stopTyping');
  // });

  // socket.on('joined', (data) => {
  //     socket.broadcast.emit('joined', (data));
  // });

  // socket.on('leave', (data) => {
  //     socket.broadcast.emit('leave', (data));
  // });
});

app.use(express.static(__dirname + '/public/'));

// Handle SPA
app.get(/.*/, (req, res) =>
  res.sendFile(path.resolve(__dirname, 'public/index.html'))
);

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
