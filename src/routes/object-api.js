const cors = require('cors');
const Object_api = require('express').Router();
const {
    ObjectDetection,
    UpdateObject,
    DeleteObject,
    ListObject
} = require('../controller/object-controller');

Object_api.use(cors());

// Các api cho xử lý với vật thể
//http://localhost:3030/object_api/
Object_api.post('/detection', ObjectDetection);
Object_api.put('/update', UpdateObject);
Object_api.delete('/delete', DeleteObject);
Object_api.get('/list', ListObject);

module.exports = Object_api;