const mongoose = require("mongoose");

const chartDataSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    budget: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        trim: true,
        required: true,
    }
}, {collection: "chartData"});

module.exports = mongoose.model("chartData", chartDataSchema);