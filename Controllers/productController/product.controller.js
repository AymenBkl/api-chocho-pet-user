
const getProducts = require('./getProducts');




module.exports = {
    
    getProducts: (req, res, next) => {
        getProducts.getProduct(res);
    },

}