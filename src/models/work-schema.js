const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CobotStateSchema = new Schema({
    j1: { type: Number, required: true },
    j2: { type: Number, required: true },
    j3: { type: Number, required: true },
    j4: { type: Number},
});

const StepSchema = new Schema({
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    z: { type: Number, required: true },
    cobotState: { type: CobotStateSchema, required: true }
});

const workSchema = new Schema({
    name: { type: String, required: true },
    description: { type: Map, of: StepSchema, required: true }
});

module.exports = mongoose.model('work', workSchema);