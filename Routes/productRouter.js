var express = require('express');

var router = express.Router();

const products = require('../Controllers/productController/product.controller');

const cors = require('../Middlewares/cors');



router.all('/', function(req, res, next) {
    next();
})
.options('/',cors.corsWithOptions,  function(req, res, next) {
    next();
})
.get('/getproducts',cors.corsWithOptions,products.getProducts)

.get('/getproduct/:productId',cors.corsWithOptions,products.getProduct);








module.exports = router;


