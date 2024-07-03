const bodyParser = require('body-parser');
const axios = require('axios');

const RotateBaseRight = async (req, res) => {
    //method: POST
    try{
        const amplitude = req.body.amplitude;
            req.io.emit('RotateBaseRight', amplitude);
            res.status(200).send({
                message: 'Rotating base right...' 
            });
    }
    catch(error){
        res.status(400).send(error);
    }
};
const RotateBaseLeft = async (req, res) => {
    //method: POST
    try{
        const amplitude = req.body.amplitude;
            req.io.emit('RotateBaseLeft', amplitude);
            res.status(200).send({
                message: 'Rotating base left...' 
            });
    }
    catch(error){
        res.status(400).send(error);
    }
};
const RotateServo01Up = async (req, res) => {
    //method: POST
    try{
        const amplitude = req.body.amplitude;
            req.io.emit('RotateServo01Up', amplitude);
            res.status(200).send({
                message: 'Rotating servo 01 up...' 
            });
    }
    catch(error){
        res.status(400).send(error);
    }
};
const RotateServo01Down = async (req, res) => {
    //method: POST
    try{
        const amplitude = req.body.amplitude;
            req.io.emit('RotateServo01Down', amplitude);
            res.status(200).send({
                message: 'Rotating servo 01 down...' 
            });
    }
    catch(error){
        res.status(400).send(error);
    }
}
const RotateServo02Up = async (req, res) => {
    //method: POST
    try{
        const amplitude = req.body.amplitude;
            req.io.emit('RotateServo02Up', amplitude);
            res.status(200).send({
                message: 'Rotating servo 02 up...' 
            });
    }
    catch(error){
        res.status(400).send(error);
    }
}
const RotateServo02Down = async (req, res) => {
    //method: POST
    try{
        const amplitude = req.body.amplitude;
            req.io.emit('RotateServo02Down', amplitude);
            res.status(200).send({
                message: 'Rotating servo 02 down...' 
            });
    }
    catch(error){
        res.status(400).send(error);
    }
}
const RotateClawRight = async (req, res) => {
    //method: POST
    try{
        const amplitude = req.body.amplitude;
            req.io.emit('RotateClawRight', amplitude);
            res.status(200).send({
                message: 'Rotating claw right...' 
            });
    }
    catch(error){
        res.status(400).send(error);
    }
}
const RotateClawLeft = async (req, res) => {
    //method: POST
    try{
        const amplitude = req.body.amplitude;
            req.io.emit('RotateClawLeft', amplitude);
            res.status(200).send({
                message: 'Rotating claw left...' 
            });
    }
    catch(error){
        res.status(400).send(error);
    }
}
const RotateClawUp = async (req, res) => {
    //method: POST
    try{
        const amplitude = req.body.amplitude;
            req.io.emit('RotateClawUp', amplitude);
            res.status(200).send({
                message: 'Rotating claw up...' 
            });
    }
    catch(error){
        res.status(400).send(error);
    }
}
const RotateClawDown = async (req, res) => {
    //method: POST
    try{
        const amplitude = req.body.amplitude;
            req.io.emit('RotateClawDown', amplitude);
            res.status(200).send({
                message: 'Rotating claw down...' 
            });
    }
    catch(error){
        res.status(400).send(error);
    }
}
const RotateClaw = async (req, res) => {
    //method: POST
    try{
        const amplitude = req.body.amplitude;
            req.io.emit('RotateClaw', amplitude);
            res.status(200).send({
                message: 'Rotating claw close...' 
            });
    }
    catch(error){
        res.status(400).send(error);
    }
}
const ReleaseClaw = async (req, res) => {
    //method: POST
    try{
        const amplitude = req.body.amplitude;
            req.io.emit('ReleaseClaw', amplitude);
            res.status(200).send({
                message: 'Releasing claw...' 
            });
    }
    catch(error){
        res.status(400).send(error);
    }
}
module.exports = {
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
};