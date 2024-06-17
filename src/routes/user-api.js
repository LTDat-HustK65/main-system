const cors = require('cors');
const User_api = require('express').Router();

User_api.use(cors());



module.exports = User_api;