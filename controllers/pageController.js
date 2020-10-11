const Page = require('../models/Page');

module.exports.create_post = async (req, res) => {
    const { userId, pageName, topHeadline, secondaryHeadline, mainDescription } = req.body;
    
    try {
        const page = await Page.create( { userId, pageName, topHeadline, secondaryHeadline, mainDescription });
        res.status(201).json({ page: page._id });
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json( {errors });
    }
}

module.exports.update_post = async (req, res) => {
    const { userId, pageUrl, pageName, topHeadline, secondaryHeadline, mainDescription } = req.body;

    try {
        const page = await Page.findOneAndUpdate( { userId: userId }, { 
            pageUrl,
            pageName, 
            topHeadline, 
            secondaryHeadline, 
            mainDescription
        });
        res.status(201).json({ page: page._id });
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json( {errors });
    }
}
/* 
module.exports.page_get = async (req, res) => {
    const _id = req.params.id;

    try {
        const page = await Page.findById( _id );
        // res.status(200).json({ page: page._id });
        res.render('index');
    }
    catch (err) {
        console.log('Page not found...');
        // const errors = handleErrors(err);
        res.sendStatus(400);
    }
} */