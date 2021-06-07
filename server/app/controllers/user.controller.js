const bcrypt = require("bcrypt");
const saltRounds = 10;

const {
    checkValidUser,
    createUser,
    findOneUser,
    getAllUsers,
} = require("../helpers/db.helpers.js");

const { findObject } = require("../helpers/helpers.js");

// Store userID globally for easier use
let globalUserID;

// Login handler
async function handleLogin(req, res) {
    const user = await checkValidUser(req.body.emailAddress, req.body.password);

    if (user == null || user === false) {
        return res.sendStatus(400);
    } else {
        globalUserID = user._id;
        // console.log("global: ", globalUserID);
        return res.status(200).json(user);
    }
}

// Register handler
function handleRegister(req, res) {
    // Salt the plain password
    const passwordHash = bcrypt.hashSync(req.body.password, saltRounds);

    const userObject = {
        firstName: req.body.firstName,
        surName: req.body.surName,
        emailAddress: req.body.emailAddress,
        password: passwordHash,
        birthDate: req.body.birthDate,
        town: req.body.town,
        gender: req.body.gender,
        typeIllness: req.body.typeIllness,
        profileAvatar: req.body.profileAvatar,
        about: req.body.about,
    };

    console.log("User register data: ", userObject);
    createUser(userObject);
}

// Get all users
async function handleUsers(req, res) {
    // get all users
    const usersData = await getAllUsers();

    // return data
    return res.json(usersData);
}

// Get one specific user by userID
async function handleUser(req, res) {
    // get user data
    const userData = await findOneUser(req.params.id);

    // return data
    return res.json(userData);
}

// Get all chats from user by userID
async function handleChats(req, res) {
    // get user data
    const userData = await findOneUser(req.params.id);

    const chatsData = userData.chats;

    // return data
    return res.json(chatsData);
}

// get chat data of one user with another person
async function handleChatDetail(req, res) {
    const userData = await findOneUser(globalUserID);
    const chatUserData = userData.chats;

    // Search the enemy in users chat data:
    const messagesData = findObject(req.params.id, chatUserData);
    // console.log(messagesData)
    return res.json(messagesData);
}

// Get all participant data per chat
async function handleChatParticipants(req, res) {
    // get user data
    const userData = await findOneUser(req.params.id);

    const userName = {
        firstName: userData.firstName,
        surName: userData.surName,
    };

    // return data
    return res.json(userName);
}

module.exports = {
    handleLogin,
    handleRegister,
    handleUsers,
    handleUser,
    handleChats,
    handleChatDetail,
    handleChatParticipants,
};