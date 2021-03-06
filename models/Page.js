const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
    },
    pageLogo: {
        type: String,
    },
    pageUrl: {
        type: String,
        unique: true,
        lowercase: true,
        maxlength: [20, 'Maximum lenght is 20 characters'],
    },
    buttonColor: {
        type: String,
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
    contactFormTitle: {
        type: String,
        maxlength: [60, 'Maximum lenght is 60 characters'],
    },
    contactFormSubtitle: {
        type: String,
        maxlength: [60, 'Maximum lenght is 60 characters'],
    },
    contactFormIncludeName: {
        type: String,
    },
    contactFormIncludeComment: {
        type: String,
    },
    contactFormIncludeTel: {
        type: String,
    },
    contactFormIncludeEmail: {
        type: String,
    },
    contactFormButton: {
        type: String,
        maxlength: [60, 'Maximum lenght is 60 characters'],
    },
    featuresHeadline: {
        type: String,
        maxlength: [60, 'Maximum lenght is 60 characters'],
    },
    firstFeatureIcon: {
        type: String,
    },
    firstFeatureTitle: {
        type: String,
        maxlength: [60, 'Maximum lenght is 60 characters'],
    },
    firstFeatureDescription: {
        type: String,
        maxlength: [150, 'Maximum lenght is 60 characters'],
    },
    secondFeatureIcon: {
        type: String,
    },
    secondFeatureTitle: {
        type: String,
        maxlength: [60, 'Maximum lenght is 60 characters'],
    },
    secondFeatureDescription: {
        type: String,
        maxlength: [150, 'Maximum lenght is 60 characters'],
    },
    thirdFeatureIcon: {
        type: String,
    },
    thirdFeatureTitle: {
        type: String,
        maxlength: [60, 'Maximum lenght is 60 characters'],
    },
    thirdFeatureDescription: {
        type: String,
        maxlength: [150, 'Maximum lenght is 60 characters'],
    },
    forthFeatureIcon: {
        type: String,
    },
    forthFeatureTitle: {
        type: String,
        maxlength: [60, 'Maximum lenght is 60 characters'],
    },
    forthFeatureDescription: {
        type: String,
        maxlength: [150, 'Maximum lenght is 60 characters'],
    },
    columsHeadline: {
        type: String,
        maxlength: [60, 'Maximum lenght is 60 characters'],
    },
    columnsSubtitle: {
        type: String,
        maxlength: [60, 'Maximum lenght is 60 characters'],
    },
    firstColumnImage: {
        type: String,
    },
    firstColumnTitle: {
        type: String,
        maxlength: [60, 'Maximum lenght is 60 characters'],
    },
    firstColumnSubtitle: {
        type: String,
        maxlength: [60, 'Maximum lenght is 60 characters'],
    },
    firstColumnDescription: {
        type: String,
        maxlength: [150, 'Maximum lenght is 60 characters'],
    },
    secondColumnImage: {
        type: String,
    },
    secondColumnTitle: {
        type: String,
        maxlength: [60, 'Maximum lenght is 60 characters'],
    },
    secondColumnSubtitle: {
        type: String,
        maxlength: [60, 'Maximum lenght is 60 characters'],
    },
    secondColumnDescription: {
        type: String,
        maxlength: [150, 'Maximum lenght is 60 characters'],
    },
    thirdColumnImage: {
        type: String,
    },
    thirdColumnTitle: {
        type: String,
        maxlength: [60, 'Maximum lenght is 60 characters'],
    },
    thirdColumnSubtitle: {
        type: String,
        maxlength: [60, 'Maximum lenght is 60 characters'],
    },
    thirdColumnDescription: {
        type: String,
        maxlength: [60, 'Maximum lenght is 60 characters'],
    },
    referenceLine1: {
        type: String,
        maxlength: [60, 'Maximum lenght is 60 characters'],
    },
    referenceLine2: {
        type: String,
        maxlength: [60, 'Maximum lenght is 60 characters'],
    },
    referenceName: {
        type: String,
        maxlength: [60, 'Maximum lenght is 60 characters'],
    },
    footerText: {
        type: String,
        maxlength: [150, 'Maximum lenght is 60 characters'],
    },
});

const Page = mongoose.model('page', pageSchema);

module.exports = Page;