module.exports = (mongoose) => {
  const Tutorial = mongoose.model(
    'tutorial',
    mongoose.Schema(
      {
        title: String,
        description: String,
        published: Boolean,
      },
      { timestamps: true }
    )
  );

  return Tutorial;
};

// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   firstName: String,
//   surName: String,
//   emailaddress: String,
//   birthdate: String,
//   town: String,
//   gender: String,
//   typeIllness: String,
//   profileAvatar: String,
//   about: String,
// });

// exports.userSchema = userSchema;
// module.exports = new mongoose.model('user', userSchema);
