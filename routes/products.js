var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');


/* GET home page. */

router.get('/add', productController.agregar);
router.get('/:id', productController.detail);
router.post('/add', productController.store);
router.post('/delete/:id', productController.delete);
router.post('/edit/:id', productController.edit);
router.get('/edit/:id', productController.editForm);

module.exports = router;
