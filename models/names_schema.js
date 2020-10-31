const mongoose = require("mongoose");

const nameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    backgroundColor: {
        type: String,
        required: true
    }
}, {collection: "names"});

module.exports = mongoose.model("names", nameSchema);