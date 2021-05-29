const prepareRequest = require('./prepareRequest');

module.exports.createPriceRule = (options) => {
    prepareRequest.prepareRequest('POST','2021-04/price_rules.json',options)
        .then((result) => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        })
}