
const getProducts = require('./getProducts');




module.exports = {
    
    getProducts: (req, res, next) => {
        getProducts.getProducts(res);
    },

    getProduct: (req, res, next) => {
        getProducts.getProduct(res,req.params.productId);
    },

}