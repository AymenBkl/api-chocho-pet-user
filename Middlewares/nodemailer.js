const nodemailer = require('nodemailer');


const { config } = require('../config');

var fs = require('fs');

const handlebars = require('handlebars');

const templateBuilder = require('nodemailer-express-handlebars');

var source = fs.readFileSync('views/layout/email-template.handlebars', 'utf8');

var template = handlebars.compile(source);

const loggerController = require('../Controllers/Logger/logger.controller');

var transport;
module.exports.createTransporter = () => {
    transport = nodemailer.createTransport({
        host:'ssl0.ovh.net',
        port:587,
        secure:false,
        auth:{
            user:config.email.email,
            pass:config.email.psw
        },
        tls:{
       ciphers:'SSLv3'}
    });
    transport.use('compile', templateBuilder({
        viewEngine : 'express-handlebars',
        viewPath : './views/layout'
    }))
}

module.exports.sendEmail = (sendTo,coupon,title,subject) => {
    return new Promise((resolve,reject) => {
        let mailOptions = {
            from:config.email.email,
            to:sendTo,
            subject:subject,
            html : template({coupon : coupon,title:title})
        };
    
        transport.sendMail(mailOptions,(error,info) => {
            if (error) {
                loggerController.insertEmailLogger({level:'ERROR',type:'SEND EMAIL USER API',msg:'ERORR WHILE SENDING EMAIL' + new Error(error)});
                resolve({status:false})
                console.log(error);
            }
            else {
                resolve({status:true})
                console.log('email sent');
            }
        })
    })
   
}