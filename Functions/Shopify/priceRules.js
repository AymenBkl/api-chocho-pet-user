const prepareRequest = require('./prepareRequest');

module.exports.createPriceRule = (req,res,next) => {
    prepareRequest.prepareRequest('POST','2021-04/price_rules.json',req.body.options)
        .then((result) => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        })
}