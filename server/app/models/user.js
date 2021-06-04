const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  surName: String,
  emailAddress: String,
  password: String,
  birthDate: String,
  town: String,
  gender: String,
  typeIllness: Array,
  profileAvatar: String,
  about: String,
  chats: [
    {
      participant: {
        id: Schema.Types.ObjectID,
        firstName: String,
        surName: String,
        profileAvatar: String,
      },
      messages: [
        {
          sender: Schema.Types.ObjectID,
          content: String,
          time: String,
        },
      ],
    },
  ],
});

exports.userSchema = userSchema;
module.exports = new mongoose.model('users', userSchema);
