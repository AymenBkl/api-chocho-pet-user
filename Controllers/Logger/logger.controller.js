
const productLogger = require('./productLogger');

const emailLogger = require('./emailLogger');


module.exports = {
    getProductLogger : (req,res,next) => {
        productLogger.getProductLogger(res,req.query.level);
    },

    insertProductLogger : (object) => {
        productLogger.insertProductLogger(object);
    },
    getEmailLogger : (req,res,next) => {
        emailLogger.getEmailLogger(res,req.query.level);
    },

    insertEmailLogger : (object) => {
        emailLogger.insertEmailLogger(object);
    },
    
}