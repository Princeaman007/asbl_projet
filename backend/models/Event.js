const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
    },
    services: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service",
    }],
});

module.exports = mongoose.model("Event", eventSchema);
