const jwt = require('jsonwebtoken');
const Page = require('../models/Page');

const getPageInfo = (req, res, next) => {
    const token = req.cookies.jwt;

    if (token) {
        jwt.verify(token, 'the secret string', async (err, decodedToken) => {
            if (err){
                console.log(err.message);
                res.locals.user = null;
                next();
            }
            else {
                //console.log(decodedToken);
                let page = await Page.findOne( {userId: decodedToken.id});
                res.locals.page = page;
                next();
            }
        });
    }
    else {
        res.locals.page = null;
        next();
    }
}

const getPage = async (req, res, next) => {
    const pageUrl = req.params.pageUrl;
    try {
        const page = await Page.findOne( { pageUrl } );
        if (!page) {
            res.status(400).send('404 page not found');
        }

        res.locals.page = page;
        next();
    }
    catch (err) {
        res.status(400).send('404 page not found');
    }
}

const getCorpPage = async (req, res, next) => {
    const _id = '5f820bdb2f28eda212aa1d2d';
    try {
        const page = await Page.findById( _id );
        res.locals.page = page;
        next();
    }
    catch (err) {
        res.status(400).send('404 page not found');
    }
}

module.exports = { getPageInfo, getPage, getCorpPage };