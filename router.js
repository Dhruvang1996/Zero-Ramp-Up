const router = require('express').Router();

const productController = require('./controller/productController');
const controller = require('./controller/controller');

router.get('/order', controller.getOrder);
router.post('/product', productController.createProduct);

module.exports = router;
