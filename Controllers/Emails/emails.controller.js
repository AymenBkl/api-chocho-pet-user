const addEmail = require('./addEmail');

const addContact = require('./addContact');

const sendEmail = require('./sendEmail');
module.exports = {
    addEmail: (req,res,next) => {
        addEmail.addEmail(res,req.body.email);
    },

    getEmails: (req,res,next) => {

    },

    addContact: (req,res,next) => {
        addContact.addContact(res,req.body.contact);
    },

    sendEmail: (req,res,next) => {
        sendEmail.sendEmail('aymenxyz6@gmail.com','WELCOM TO CHOCHO PET','COUPON');
    }
}