const mongoose = require('mongoose');
const { Schema } = mongoose;

// Import itemSchema
const { itemSchema } = require('./BookItem'); // Ensure correct import path

// Define the BookResponse schema
const bookResponseSchema = new Schema({
    items: {
        type: [itemSchema],
        required: true
    },
    kind: {
        type: String,
        required: true
    },
    totalItems: {
        type: Number,
        required: true
    }
});

// Create and export the model
const Books = mongoose.model('Books', bookResponseSchema);

module.exports = Books;
