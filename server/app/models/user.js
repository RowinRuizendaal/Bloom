const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Datastructure/Schema of the user object
 *
 */

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
});

exports.userSchema = userSchema;
module.exports = new mongoose.model('users', userSchema);
