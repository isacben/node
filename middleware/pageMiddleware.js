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
module.exports = { getPageInfo };