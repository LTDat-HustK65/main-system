const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApiSchema = new Schema({
    name: { type: String, required: true },
    input: { type: Number, required: true }
});

const programSchema = new Schema({
    name: { type: String, required: true },
    apis: { type: Map, of: ApiSchema, required: true }
});

module.exports = mongoose.model('program', programSchema);