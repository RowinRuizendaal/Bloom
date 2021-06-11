const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/user.controller.js');
const chatControllers = require('../controllers/chat.controller.js');

router
  .post('/api/login', userControllers.handleLogin) // Login
  .post('/api/register', userControllers.handleRegister) // Register
  .get('/api/users/:id', userControllers.handleUsers) // Users
  .get('/api/user/:id', userControllers.handleUser) // User
  .get('/api/chatsItems/:id', chatControllers.handleChats) // Chats
  .get('/api/createChat/:id', chatControllers.handleCreateChat) // Create chat env
  .get('/api/deleteChat/:id', chatControllers.handleDeleteChat) // Delete chat env
  .get('/api/acceptChat/:userID/:chatID', chatControllers.handleAcceptChat); // Accept chat env

module.exports = router;
