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

const eventHandler = require('./app/controllers/socket.js');

io.on('connection', (socket) => {
  eventHandler.ioEvents(socket, io);
});

app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded --> multipart when use of multer (files)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

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
