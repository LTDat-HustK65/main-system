const cors = require('cors');
const Cobot_api = require('express').Router();
const { 
    RotateBaseRight
} = require('../controller/cobot-controller');

Cobot_api.use(cors());

// Các api để điểu khiển cobot
//http://localhost:3030/cobot_api

Cobot_api.post('/rotate_base_right', RotateBaseRight);


module.exports = Cobot_api; 