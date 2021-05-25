const contactModel = require('../../Models/contact');

const emailResponse = require('../../EmailResponse/response.controller');

module.exports.addContact = (res,contactDetail) => {
    console.log(contactDetail);
    contactModel.create(contactDetail)
        .then(contactCreated => {
            console.log(contactCreated);
            if (contactCreated) {
                emailResponse.response('success',res,'Contact Created Succesfully',200,null)
            }
            else {
                emailResponse.response('error',res,'Contact Failed',500,null);
            }
        })
        .catch(err => {
            emailResponse.response('error',res,err,500,null);

            console.log('err',err);
        })
}