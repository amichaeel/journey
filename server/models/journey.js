const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journeySchema = new Schema ({
    _id: {
        type: Schema.Types.ObjectId,
        quantity: Number,
        auto: true
      },
    title: {
        type: String,
        required: true
    },
    journey_location: {
        type: String
    },
    locations: {
        type: Array
    },
    authorID: {
        type: String
    },
    date_created: {
        type: Date,
        default: Date.now()
    }
})

const Journey = mongoose.model("Journey", journeySchema);

module.exports = Journey;