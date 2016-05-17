var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    CarEntryModel;

/**
 * Car Entry Model
 * @type {mongoose.Schema}
 */
CarEntryModel = new Schema({
    title: {
        type: String
    },
    year: {
        type: Number
    },
    make: {
        type: String
    },
    model: {
        type: String
    },
    description: {
        type: String
    },
    images: [{ url: String}],
    user: [{ name: String, email: String }],
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Entry', CarEntryModel);