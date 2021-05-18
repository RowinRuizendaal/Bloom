// const dbConfig = require('../config/db.config.js');
require('dotenv').config();

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.tutorials = require('./tutorial.model.js')(mongoose);

module.exports = db;

// database connection
const db = createConnection();

function createConnection() {
  const DB_USER = process.env.DB_USER;
  const DB_PASS = process.env.DB_PASS;
  const DB_NAME = process.env.DB_NAME;
  const URI = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_NAME}.0mbh2.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;
  mongoose.connect(
    URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    },
    (err) => {
      err ? console.log(err) : console.log('MongoDB is connected');
    }
  );

  return mongoose.connection;
}
