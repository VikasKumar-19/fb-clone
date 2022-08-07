const express = require('express');
const { register, activateAccount, login } = require('../controllers/user');

const Router = express.Router();

Router.post("/register", register);
Router.post("/activate", activateAccount);
Router.post("/login", login)

module.exports = Router;