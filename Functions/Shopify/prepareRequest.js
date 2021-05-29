const request = require('request');

const shopifyConfig = require('../../config').config.shopify;

module.exports.prepareRequest = (method,endpoint,body = {}) => {
    let url = shopifyConfig.baseURL + 'admin/api/' + endpoint ;
    let username = "ChochoPetUser";
    let password = shopifyConfig.apiKey;
    let options = {
        method:method,
        url:url,
        json:true,
        headers:{
            'X-Shopify-Access-Token': shopifyConfig.apiKey,
            'content-type':'application/json'
        },
        json:body
    }
    return new Promise((resolve,reject) => {
        callback = (error, response, body) => {
            if (error || response.statusCode != 200){
                
              if (response) {
                  resolve({status:false,error:'Something Went Wrong !',statusCode:response.statusCode});
              }
              else if (error) {
                console.log(error);
                resolve({status:false,error:error,statusCode:500});
              }
            }
            if (!error && response.statusCode == 200) {
              const newBody = JSON.parse(body);
              resolve({status:true,body:newBody});
            }
          };
          console.log(options);
          request(options, callback);
    }) 
}