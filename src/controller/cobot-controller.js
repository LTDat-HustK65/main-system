const bodyParser = require('body-parser');
const axios = require('axios');

const RotateBaseRight = async (req, res) => {
    //method: POST
    try{
        const amplitude = req.body.amplitude;
        req.io.emit('RotateBaseRight', { amplitude });
        res.status(200).send({ message: 'Rotating base right...' });
    }
    catch(error){
        res.status(400).send(error);
    }
};

module.exports = {
    RotateBaseRight
};