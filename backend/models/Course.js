const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    language: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Language",
    },
});

module.exports = mongoose.model("Course", courseSchema);
