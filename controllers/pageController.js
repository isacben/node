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