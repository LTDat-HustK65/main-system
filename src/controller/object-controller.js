const Object = require('../models/object-schema');
const bodyParser = require('body-parser');
const axios = require('axios');

const ObjectDetection = async (req, res) => {
    //method: POST
    try {
        const object = new Object({
            timeApear: Date.now(),
            properties: {
                name: req.body.properties.name,
                speed: req.body.properties.speed,
                vector: {
                    x: req.body.properties.vector.x, 
                    y: req.body.properties.vector.y,
                    z: req.body.properties.vector.z
                },
                currentLocation: {
                    x: req.body.properties.currentLocation.x,
                    y: req.body.properties.currentLocation.y,
                    z: req.body.properties.currentLocation.z
                }
            }
        });

        await object.save();

        console.log(`\n DETECTED OBJECT '${object.properties.name}' !`);
        res.status(200).json({ message: 'Data saved into DB successfully' }).send(object);
    } catch (error) {
        res.status(400).send(error);
    }
}

const UpdateObject = async (req, res) => {
    //method: PUT
    try {
        const object = await Object.findByIdAndUpdate(req.body.name, {
            properties: {
                currentLocation: {
                    x: req.body.properties.currentLocation.x,
                    y: req.body.properties.currentLocation.y,
                    z: req.body.properties.currentLocation.z
                }
            }
        });
        res.status(200).send(object.properties.currentLocation);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

const DeleteObject = async (req, res) => {
    //method: DELETE
    try {
        const object = await Object.findByIdAndDelete(req.body.name);
        res.status(200).send('Deleted');
    }
    catch (error) {
        res.status(400).send(error);
    }
}

const ListObject = async (req, res) => {
    //method: GET
    try {
        const object = await Object.find();
        res.status(200).send(object);
    }
    catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {
    ObjectDetection,
    UpdateObject,
    DeleteObject,
    ListObject
};