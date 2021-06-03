const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Users = require('./app/models/user.js');
const path = require('path');
const dbConnection = require('./app/helpers/db.js');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded --> multipart when use of multer (files)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Sockets
io.on('connection', (socket) => {
  socket.on('disconnect'),
    () => {
      console.log('user has disconnected');
    };
});

// Client requests

// Login
app.post('/api/login', handleLogin);

// Register
app.post('/api/register', handleRegister);

// Users
app.get('/api/users', handleUsers);

// User
app.get('/api/user/:id', handleUser);

// Chats
app.get('/api/chatsItems/:id', handleChats);

// Chats participants
app.get('/api/chatsParticipants/:id', handleChatParticipants);

// Chat messages

app.use(express.static(__dirname + '/public/'));

// Handle SPA
app.get(/.*/, (req, res) =>
  res.sendFile(path.resolve(__dirname, 'public/index.html'))
);

// Export these functions to a router folder

// Login handler
async function handleLogin(req, res) {
  const user = await Users.findOne({
    emailAddress: req.body.emailAddress,
    password: req.body.password,
  });

  if (user == null) {
    return res.sendStatus(400);
  } else {
    return res.status(200).json(user);
  }
  return;
}

// Put all functions in controllers/user.controller.js
// Add user to db
function handleRegister(req, res) {
  const userObject = {
    firstName: req.body.firstName,
    surName: req.body.surName,
    emailAddress: req.body.emailAddress,
    password: req.body.password,
    birthDate: req.body.birthDate,
    town: req.body.town,
    gender: req.body.gender,
    typeIllness: req.body.typeIllness,
    profileAvatar: req.body.profileAvatar,
    about: req.body.about,
  };

  console.log('User register data: ', userObject);
  createUser(userObject);
  // getAllUsers();
}

// Add user to DB
function createUser({
  firstName,
  surName,
  emailAddress,
  password,
  birthDate,
  town,
  gender,
  typeIllness,
  profileAvatar,
  about,
}) {
  Users.create({
    firstName: firstName,
    surName: surName,
    emailAddress: emailAddress,
    password: password,
    birthDate: birthDate,
    town: town,
    gender: gender,
    typeIllness: typeIllness,
    profileAvatar: profileAvatar,
    about: about,
  });
}

// Get all users
async function handleUsers(req, res) {
  // get all users
  const usersData = await getAllUsers();

  // return data
  return res.json(usersData);
}

// Get one specific user by userID
async function handleUser(req, res) {
  // get user data
  const userData = await findOneUser(req.params.id);

  // return data
  return res.json(userData);
}

// Get all chats from user by userID
async function handleChats(req, res) {
  // get user data
  const userData = await findOneUser(req.params.id);

  const chatsData = userData.chats;
  console.log(chatsData);

  // return data
  return res.json(chatsData);
}

// Get all participant data per chat
async function handleChatParticipants(req, res) {
  // get user data
  const userData = await findOneUser(req.params.id);

  const userName = {
    firstName: userData.firstName,
    surName: userData.surName,
  };

  // return data --> name
  return res.json(userName);
}

// Get data of one specific user by userID
async function findOneUser(userID) {
  const user = await Users.findOne({ _id: userID }).catch((err) =>
    console.log(err)
  );

  // return user data
  return user;
}

// Get all users of DB
async function getAllUsers() {
  const users = await Users.find().catch((err) => console.log(err));
  return users;
}

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
