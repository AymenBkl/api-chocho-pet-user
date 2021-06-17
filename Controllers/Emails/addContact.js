const contactModel = require('../../Models/contact');

const emailResponse = require('../../EmailResponse/response.controller');

const loggerController = require('../Logger/logger.controller');

module.exports.addContact = (res,contactDetail) => {
    console.log(contactDetail);
    contactModel.create(contactDetail)
        .then(contactCreated => {
            console.log(contactCreated);
            if (contactCreated) {
                emailResponse.response('success',res,'Contact Created Succesfully',200,null)
            }
            else {
                loggerController.insertEmailLogger({level:'ERROR',type:'ADD CONTACT USER API',msg:'ERORR WHILE ADDING CONTACT'});
                emailResponse.response('error',res,'Contact Failed',500,null);
            }
        })
        .catch(err => {
            loggerController.insertEmailLogger({level:'ERROR',type:'ADD CONTACT USER API',msg:'ERORR WHILE ADDING CONTACT,' + new Error(err)});
            emailResponse.response('error',res,err,500,null);

            console.log('err',err);
        })
}