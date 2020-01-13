const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BandSchema = new Schema({
    name: {
        type: String
    },

    members: {
        type: Array
    },

    albums: {
        type: Array
    },

    info: {
        type: Object
    }
});

let Band = mongoose.model("Band", BandSchema);

module.exports = Band;