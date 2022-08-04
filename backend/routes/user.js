const express = require('express');
const { register } = require('../controllers/user');

const Router = express.Router();

Router.post("/register", register);

module.exports = Router;