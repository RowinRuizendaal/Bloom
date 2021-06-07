const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const dbConnection = require('./app/config/db.connection.js');
const router = require('./app/routes/router.js');
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
    cors: {
        origin: 'http://localhost:8080',
        methods: ["GET", "POST"],
        transport: ['websocket', 'polling', 'flashsocket'],
        // allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    next();
});

app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded --> multipart when use of multer (files)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

// Sockets

io.on('connection', (socket) => {
    console.log('A user connected');

    socket.emit('msg', 'doei');

    socket.on('msg-con', (data) => {
        console.log(data);
        // socket.broadcast.emit('chat-message', data);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });

    // // to global mongoose ID
    // socket.emit('chat-message', {
    //   message: 'hoi',
    // });

    // socket.on('chat-message', (data) => {
    //   console.log(data);
    //   socket.broadcast.emit('chat-message', data);
    // });
});

app.use(express.static(__dirname + '/public/'));

// Handle SPA
// app.get(/.*/, (req, res) =>
//   res.sendFile(path.resolve(__dirname, 'public/index.html'))
// );

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});