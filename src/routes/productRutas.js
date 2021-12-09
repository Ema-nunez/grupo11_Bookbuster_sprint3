const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

router.get('/cart', productController.cart);

router.get('/productDetail', productController.productDetail);

router.get('/agregarProducto', productController.agregarProducto)

module.exports = router;