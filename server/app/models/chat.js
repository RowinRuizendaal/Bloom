const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const chatSchema = new Schema({
    participants: Array,
    messages: [{
        sender: String,
        content: String,
        time: String,
    }, ],
});

exports.chatSchema = chatSchema;
module.exports = new mongoose.model('chats', chatSchema);