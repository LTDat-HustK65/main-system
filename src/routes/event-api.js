const cors = require('cors');
const Event_api = require('express').Router();
const {
    GetEvent,
    InitEvent,
    UpdateEvent,
    DeleteEvent
} = require('../controller/event-controller');

Event_api.use(cors());

// Các api cho người phát triển bắt sự kiện tương tác với cobot và hệ thống
//http://localhost:3030/event_api/
Event_api.get('/get_event', GetEvent);
Event_api.post('/init_event', InitEvent);
Event_api.put('/update_event/:id', UpdateEvent);
Event_api.delete('/delete_event/:id', DeleteEvent);

module.exports = Event_api;