var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    CarEntryModel;
    
    
CarEntryModel = new Schema({
    title: {
        type: String
    }, 
    description: {
        type: String
    },
    user: [{ name: String, email: String }],
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Entry', CarEntryModel);