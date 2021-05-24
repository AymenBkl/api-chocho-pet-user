const addEmail = require('./addEmail');

module.exports = {
    addEmail: (req,res,next) => {
        addEmail.addEmail(res,req.body.email);
    },

    getEmails: (req,res,next) => {

    }
}