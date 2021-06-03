const express = require('express');
const router = express.Router();
const controllers = require('../controllers/user.controller.js');

router
  .post('/api/login', controllers.handleLogin) // Login
  .post('/api/register', controllers.handleRegister) // Register
  .get('/api/users', controllers.handleUsers) // Users
  .get('/api/user/:id', controllers.handleUser) // User
  .get('/api/chatsItems/:id', controllers.handleChats) // Chats
  .get('/api/chatsParticipants/:id', controllers.handleChatParticipants); // Chats participants

module.exports = router;
