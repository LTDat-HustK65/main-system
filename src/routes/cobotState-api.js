const cors = require('cors');
const CobotState_api = require('express').Router();
const {
    GetCobotState,
    InitCobotState,
    UpdateCobotState,
    DeleteCobotState
} = require('../controller/cobotState-controller');

CobotState_api.use(cors());

// Các api cho người phát triển theo dõi trạng thái của cobot
//http://localhost:3030/cobot_state_api/
CobotState_api.get('/get_cobot_state', GetCobotState);
CobotState_api.post('/init_cobot_state', InitCobotState);
CobotState_api.put('/update_cobot_state/:id', UpdateCobotState);
CobotState_api.delete('/delete_cobot_state/:id', DeleteCobotState);

module.exports = CobotState_api;