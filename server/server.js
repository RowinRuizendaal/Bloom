const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Users = require('./app/models/user.js');
const path = require('path');

const app = express();

var corsOptions = {
  origin: 'http://localhost:8081',
};

app.use(cors(corsOptions));

// parse requests of content-type - application/x-www-form-urlencoded --> multipart when use of multer (files)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

const db = require('./app/models');
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((err) => {
    console.log('Cannot connect to the database!', err);
    process.exit();
  });

async function getAllUsers() {
  const users = await Users.find().catch((err) => console.log(err));
  console.log(users);
}
getAllUsers();

// simple route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

app.post('/', function (req, res) {
  const userObject = {
    firstName: req.body.firstName,
    surName: req.body.surName,
    emailAddress: req.body.emailAddress,
    password: req.body.password,
    birthDate: req.body.birthDate,
    town: req.body.town,
    gender: req.body.gender,
    typeIllness: req.body.typeIllness,
    profileAvatar: req.body.profileAvatar,
    about: req.body.about,
  };

  createUser(userObject);

  // adds user to DB
  function createUser({
    firstName,
    surName,
    emailAddress,
    password,
    birthDate,
    town,
    gender,
    typeIllness,
    profileAvatar,
    about,
  }) {
    Users.create({
      firstName: firstName,
      surName: surName,
      emailAddress: emailAddress,
      password: password,
      birthDate: birthDate,
      town: town,
      gender: gender,
      typeIllness: typeIllness,
      profileAvatar: profileAvatar,
      about: about,
    });
  }

  getAllUsers();
});

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
