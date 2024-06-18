const Work = require('../models/work-schema');
const bodyParser = require('body-parser');
const axios = require('axios');

const CreateWork = async (req, res) => {
    //method: POST
    try {
        const work = new Work({
            name: req.body.name,
            description: req.body.description
        });

        await work.save();
        
        console.log(`\n CREATEED WORK '${work.name}' SUCCESSFULLY !`);
        res.status(200).send(work);
    } catch (error) {
        res.status(400).send(error);
    }
}

const EditWork = async (req, res) => {
    //method: PUT
    try {
        const work = await Work.findByIdAndUpdate(req.body.name, {
            description: req.body.description
        });
        res.status(200).send(work);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

const DeleteWork = async (req, res) => {
    //method: DELETE
    try {
        const work = await Work.findByIdAndDelete(req.body.name);
        res.status(200).send(work);
    } catch (error) {
        res.status(400).send(error);
    }
}

const ListWork = async (req, res) => {
    //method: GET
    try {
        const work = await Work.find();
        res.status(200).send(work);
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {
    CreateWork,
    EditWork,
    DeleteWork,
    ListWork
};