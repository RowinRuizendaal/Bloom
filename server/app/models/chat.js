const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Datastructure/Schema of the chat object
 *
 */

const chatSchema = new Schema({
  request: {
    creater: String,
    accepted: Boolean,
  },
  participants: Array,
  messages: [
    {
      sender: String,
      content: String,
      time: String,
    },
  ],
});

exports.chatSchema = chatSchema;
module.exports = new mongoose.model('chats', chatSchema);
