const cors = require('cors');
const Programming_api = require('express').Router();
const {
    ShowListApi,
    SaveProgram
} = require('../controller/programming-controller');

Programming_api.use(cors());

// Các api cho người phát triển lâp trình công việc
//http://localhost:3030/programming_api/
Programming_api.get('/list_api', ShowListApi);
Programming_api.post('/save_program', SaveProgram);

module.exports = Programming_api;
