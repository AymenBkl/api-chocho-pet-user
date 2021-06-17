const productLogger = require('../../Models/productLogger');

module.exports.insertProductLogger = (object) => {
    productLogger.create(object)
        .then((result) => {
        })
        .catch(err => {
        })
}

