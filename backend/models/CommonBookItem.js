const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the ImageLinks schema
const imageLinksSchema = new Schema({
    smallThumbnail: {
        type: String,
        default: ""
    },
    thumbnail: {
        type: String,
        default: ""
    }
}, { _id: false });

// Define the VolumeInfo schema
const volumeInfoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: {
        type: [String],
        default: ["Not known"]
    },
    description: {
        type: String,
        default: "Not available"
    },
    imageLinks: {
        type: imageLinksSchema,
        default: () => ({})
    },
    language: {
        type: String,
        default: "Not known"
    },
    pageCount: {
        type: Number,
        default: 0
    },
    publishedDate: {
        type: String,
        default: "Unknown"
    },
    publisher: {
        type: String,
        default: "Not available"
    },
    sharedByUser: {
        type: String,
        default: "Unknown"
    },
    date: {
        type: String,
        default: () => new Date().toLocaleDateString('en-IN')
    }

}, { _id: false });

// Define the Item schema
const itemSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    id: {
        type: String,
        required: true
    },
    selfLink: {
        type: String,
        required: true
    },
    volumeInfo: {
        type: volumeInfoSchema,
        required: true
    },
});

// Create and export the model
const CommonBookItem = mongoose.model('CommonBookItem', itemSchema);

module.exports = CommonBookItem;