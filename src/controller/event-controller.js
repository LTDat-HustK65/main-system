const Event = require('../models/event-schema');
const bodyParser = require('body-parser');
const axios = require('axios');

const GetEvent = async (req, res) => {
    //method: GET
    try{
        const event = await Event.find();
        res.status(200).send(event);
    }
    catch(error){
        res.status(400).send(error);
    }
}

const InitEvent = async (req, res) => {
    //method: POST
    try{
        const event = new Event({
            name: req.body.event,
            time_detection: new Date(),
            information: req.body.information
        });
        await event.save();
        res.status(200).send(event);
    }
    catch(error){
        res.status(400).send(error);
    }
}

const UpdateEvent = async (req, res) => {
    //method: PUT
    try{
        const event = await Event.findByIdAndUpdate
        (req.params.id, req.body, {new: true});
        res.status(200).send(event);
    }
    catch(error){
        res.status(400).send(error);
    }
}

const DeleteEvent = async (req, res) => {
    //method: DELETE
    try{
        const event = await Event.findByIdAndDelete(req.params.id);
        res.status(200).send(event);
    }
    catch(error){
        res.status(400).send(error);
    }
}

module.exports = {
    GetEvent,
    InitEvent,
    UpdateEvent,
    DeleteEvent
};