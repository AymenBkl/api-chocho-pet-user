const addEmail = require('./addEmail');

const addContact = require('./addContact');

module.exports = {
    addEmail: (req,res,next) => {
        addEmail.addEmail(res,req.body.email);
    },

    getEmails: (req,res,next) => {

    },

    addContact: (req,res,next) => {
        addContact.addContact(res,req.body);
    }
}