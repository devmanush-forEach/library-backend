const mongoose = require("mongoose");
const Author = require("../models/author.model");
const Section = require("../models/author.model");

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    publisher: {
        type: String,
        required: true,
    },
    pages: {
        type: Number,
        required: false,
    },
    publicationDate: {
        type: String,
        required: true,
    },
    checkedout: {
        type: Boolean,
        default: false,
        required: true,
    },
    section_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Section,
        required: true,
    },
    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Author,
        required: true,
    }
},
    {
        versionKey: false,
        timestamps: true,
    })


module.exports = mongoose.model("book", bookSchema)