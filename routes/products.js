var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');


/* GET home page. */

router.get('/add', productController.agregar);
router.get('/:idProducto', productController.detail);


module.exports = router;
