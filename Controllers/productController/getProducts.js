const productModel = require('../../Models/product');

const productResponse = require('../../HandlerProducts/response.controller');

const badge = require('../../Models/badge');

const shipingBadges = require('../../Models/shipingBadges');

const loggerController = require('../Logger/logger.controller');

module.exports.getProducts = (res) => {
    productModel.find({status:'active'})
    .select('title productId productBadge productShipingBadge status variant_id price')
    .populate([{path:'productBadge'},{path:'productShipingBadge'},{path:'recomendedProduct.product',select:'title productId images status variant_id price'}])
        .then(products => {
            if (products && products.length > 0){
                productResponse.response('success',res,'PRODUCTS LOADDED',200,products,'GET PRODUCTS');
            }
            else if (products && products.length == 0 ){
                loggerController.insertProductLogger({level:'WARNING',type:'GET PRODUCT USER API',msg:'NO PRODUCT FOUND'});
                productResponse.response('error',res,'NO PRODUCTS FOUND',404,null,'GET PRODUCT','PRODCT NOT FOUND');
            }
            else {
                loggerController.insertProductLogger({level:'ERROR',type:'GET PRODUCT USER API',msg:'ERROR WHILE LOADING PRODUCTS'});
                productResponse.response('error',res,'Something Went Wrong !',500,null,'GET PRODUCT','Something Went Wrong !');
            }
        })
        .catch(err => {
            loggerController.insertProductLogger({level:'ERROR',type:'GET PRODUCT USER API',msg:'ERROR ON GET PRODUCT' + new Error(err)});
            productResponse.response('error',res,'Something Went Wrong !',500,null,'GET PRODUCT',err);
        })
}

module.exports.getProduct = (res,id) => {
    productModel.findOne({productId:id})
    .select('title productId productBadge productShipingBadge status variant_id price')
    .populate([{path:'productBadge'},{path:'productShipingBadge'},{path:'recomendedProduct.product',select:'title productId images status variant_id price' }])
        .then(product => {
            if (product){
                productResponse.response('success',res,'PRODUCT LOADDED',200,product,'GET PRODUCTS');
            }
            else {
                loggerController.insertProductLogger({level:'ERROR',type:'GET PRODUCT USER API',msg:'ERROR WHILE LOADING PRODUCTS'});
                productResponse.response('error',res,'Something Went Wrong !',500,null,'GET PRODUCT','Something Went Wrong !');
            }
        })
        .catch(err => {
            loggerController.insertProductLogger({level:'ERROR',type:'GET PRODUCT USER API',msg:'ERROR ON GET PRODUCT' + new Error(err)});
            productResponse.response('error',res,'Something Went Wrong !',500,null,'GET PRODUCT',err);
        })
}