var express = require('express');
var router = express.Router();
const productController = require('../controllers/productController');

const multer = require('multer');
const path = require('path');
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null,path.join(__dirname,'../public/images/products'))
  },
  filename: (req,file,cb) => {
      cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  },
});
var upload = multer({storage: storage});

router.get('/add', productController.agregar);
router.get('/:id', productController.detail);
router.post('/add', upload.single('foto'), productController.store);
router.post('/comment', productController.comment);
router.post('/delete/:id', productController.delete);
router.post('/edit/:id', productController.edit);
router.get('/edit/:id', productController.editForm);

module.exports = router;
