const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
    },
    pageName: {
        type: String,
        maxlength: [60, 'Maximum lenght is 60 characters'],
    },
    topHeadline: {
        type: String,
        maxlength: [60, 'Maximum lenght is 60 characters'],
    },
    secondaryHeadline: {
        type: String,
        maxlength: [60, 'Maximum lenght is 60 characters'],
    },
    mainDescription: {
        type: String,
        maxlength: [500, 'Maximum lenght is 60 characters'],
    },
});

const Page = mongoose.model('page', pageSchema);

module.exports = Page;