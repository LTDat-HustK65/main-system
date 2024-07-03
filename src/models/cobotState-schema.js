const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JointSchema = new Schema({
    ampitude: { type: Number, required: true },
});

const CobotStateSchema = new Schema({
    time: { type: Date, required: true },
    status: { type: JointSchema, required: true },
});
module.exports = mongoose.model('cobotState', CobotStateSchema);