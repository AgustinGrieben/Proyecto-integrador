var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');


/* GET home page. */

router.get('/add', productController.agregar);
router.get('/', productController.detail);


module.exports = router;
