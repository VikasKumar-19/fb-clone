const express = require('express');
const { home } = require('../controllers/user');

const Router = express.Router();

Router.get("/user", home);

module.exports = Router;