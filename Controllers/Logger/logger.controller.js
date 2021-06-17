
const productLogger = require('./productLogger');

const emailLogger = require('./emailLogger');


module.exports = {

    insertProductLogger : (object) => {
        productLogger.insertProductLogger(object);
    },

    insertEmailLogger : (object) => {
        emailLogger.insertEmailLogger(object);
    },
    
}