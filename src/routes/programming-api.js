const cors = require('cors');
const Programming_api = require('express').Router();
const {
    CreateWork,
    EditWork,
    DeleteWork,
    ListWork
} = require('../controller/programming-controller');

Programming_api.use(cors());

// Các api cho người phát triển lâp trình công việc
Programming_api.post('/create', CreateWork);
Programming_api.put('/edit', EditWork);
Programming_api.delete('/delete', DeleteWork);
Programming_api.get('/list', ListWork);

module.exports = Programming_api;