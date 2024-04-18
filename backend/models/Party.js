const mongoose = require("mongoose")
const { Schema } = mongoose

const { ServiceSchema } = require("./Service.js")

const partySchema = new Schema({
    title: {
        title: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        require: true,
    },
    budget: {
        type: Number,
        require: true,
    },
    image: {
        type: String,
        require: true,
    },
    services: {
        type: [ServiceSchema],
    },
},
    { timestamps: true }
);

const Party = mongoose.model("Party", partySchema);

module.exports = Party;