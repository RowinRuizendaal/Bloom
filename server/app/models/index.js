const dbConfig = require('../config/db.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Database connection
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.URI;
// db.tutorials = require('./tutorial.model.js')(mongoose);

module.exports = db;
