const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Users = require("./app/models/user.js");
const path = require("path");

const app = express();

app.use(cors());

// parse requests of content-type - application/x-www-form-urlencoded --> multipart when use of multer (files)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = require("./app/models/index.js");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch((err) => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

// Get all users of db
async function getAllUsers() {
    const users = await Users.find().catch((err) => console.log(err));
    console.log(users);
}

// Login
app.post("/api/login", handleLogin);

// Register
app.post("/api/register", handleRegister);

app.use(express.static(__dirname + "/public/"));

// Handle SPA
app.get(/.*/, (req, res) =>
    res.sendFile(path.resolve(__dirname, "public/index.html"))
);

// Login handler
async function handleLogin(req, res) {
    const user = await Users.findOne({ emailAddress: req.body.emailAddress });
    if (user == null) {
        // Account not found
        console.log("No user found");
        
    } else {
        // Account found
        // Check password
        if (req.body.password == user.password) {
            // Logged in! - state at frontend/backend?
            console.log("Logged in with account: ", user);
            // send user data to the front
            // return res.send(user)
        }
    }
    // if()
    // try {
    //   if (await bcrypt.compare(req.body.wachtwoord, user.wachtwoord)) {
    //     req.session.loggedIN = true;
    //     req.session.user = user;
    //     console.log('Succesvol ingelogd');
    //     req.flash('succes', 'Hoi ' + req.session.user.voornaam);
    //     res.render('readytostart');
    //   } else {
    //     req.flash('error', 'Wachtwoord is incorrect');
    //     res.render('index');
    //     console.log('Wachtwoord is incorrect');
    //   }
    // } catch (err) {
    //   console.log(err);
    //   req.flash('error', 'Er ging iets mis. Probeer opnieuw');
    //   res.render('index');
    // }
}

// Add user to db
function handleRegister(req, res) {
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

    console.log("User data: ", userObject);

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
}

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});