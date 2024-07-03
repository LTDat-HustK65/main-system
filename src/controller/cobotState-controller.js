const CobotState = require('../models/cobotState-schema');
const bodyParser = require('body-parser');
const axios = require('axios');

const GetCobotState = async (req, res) => {
    //method: GET
    try{
        const cobotState = await CobotState.find();
        res.status(200).send(cobotState);
    }
    catch(error){
        res.status(400).send(error);
    }
}

const InitCobotState = async (req, res) => {
    //method: POST
    try{
        const cobotState = new CobotState(req.body);
        await cobotState.save();
        res.status(200).send(cobotState);
    }
    catch(error){
        res.status(400).send(error);
    }
}

const UpdateCobotState = async (req, res) => {
    //method: PUT
    try{
        const cobotState = await CobotState.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).send(cobotState);
    }
    catch(error){
        res.status(400).send(error);
    }
}

const DeleteCobotState = async (req, res) => {
    //method: DELETE
    try{
        const cobotState = await CobotState.findByIdAndDelete(req.params.id);
        res.status(200).send(cobotState);
    }
    catch(error){
        res.status(400).send(error);
    }
}

module.exports = {
    GetCobotState,
    InitCobotState,
    UpdateCobotState,
    DeleteCobotState
};