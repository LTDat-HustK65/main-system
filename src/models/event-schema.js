const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
    name: { type: String, required: true },
    time_detection: { type: Date, required: true },
    information: { type: Object}
});

module.exports = mongoose.model('event', EventSchema);