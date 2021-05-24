const emailModel = require('../../Models/email');

const emailResponse = require('../../EmailResponse/response.controller');

module.exports.addEmail = (res,email) => {
    emailModel.create({email:email})
        .then(emailCreated => {
            console.log(emailCreated);
            if (emailCreated) {
                emailResponse.response('success',res,'Email Created Succesfully',200,null)
            }
            else {
                emailResponse.response('error',res,'Email Failed',500,null)
            }
        })
        .catch(err => {
            console.log(err);
            emailResponse.response('error',res,'Email Failed',200,null)
        })
}