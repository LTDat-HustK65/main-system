const cors = require('cors');
const Cobot_api = require('express').Router();
const {
    RotateBaseRight,
    RotateBaseLeft,
    RotateServo01Up,
    RotateServo01Down,
    RotateServo02Up,
    RotateServo02Down,
    RotateClawRight,
    RotateClawLeft,
    RotateClawUp,
    RotateClawDown,
    RotateClaw,
    ReleaseClaw
} = require('../controller/cobot-controller');

Cobot_api.use(cors());

// Các api để điểu khiển cobot
//http://localhost:3030/cobot_api
Cobot_api.post('/rotate_base_right', RotateBaseRight);
Cobot_api.post('/rotate_base_left', RotateBaseLeft);
Cobot_api.post('/rotate_servo_01_up', RotateServo01Up);
Cobot_api.post('/rotate_servo_01_down', RotateServo01Down);
Cobot_api.post('/rotate_servo_02_up', RotateServo02Up);
Cobot_api.post('/rotate_servo_02_down', RotateServo02Down);
Cobot_api.post('/rotate_claw_right', RotateClawRight);
Cobot_api.post('/rotate_claw_left', RotateClawLeft);
Cobot_api.post('/rotate_claw_up', RotateClawUp);
Cobot_api.post('/rotate_claw_down', RotateClawDown);
Cobot_api.post('/rotate_claw', RotateClaw);
Cobot_api.post('/release_claw', ReleaseClaw);


module.exports = Cobot_api; 