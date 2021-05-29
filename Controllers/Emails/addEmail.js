const emailModel = require('../../Models/email');

const emailResponse = require('../../EmailResponse/response.controller');

const addEmail = require('./sendEmail').addEmailToEmails;

module.exports.addEmail = (res,email) => {
    emailModel.create({email:email})
        .then(emailCreated => {
            console.log(emailCreated);
            if (emailCreated) {
                addEmail(email);
                emailResponse.response('success',res,'Email Created Succesfully',200,null)
            }
            else {
                emailResponse.response('error',res,'Email Failed',500,null);
            }
        })
        .catch(err => {
            emailResponse.response('error',res,err,500,null);

            console.log('err',err);
        })
}