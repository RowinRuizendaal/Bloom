const dbConfig = require('../config/db.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Database connection
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.URI;
// db.users = require('./user.js')(mongoose);

module.exports = db;