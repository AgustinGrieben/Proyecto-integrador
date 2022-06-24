var express = require('express');
var router = express.Router();
let userController = require("../controllers/userController");
const multer = require('multer');
const path = require('path');
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null,path.join(__dirname,'../public/images/users'))
  },
  filename: (req,file,cb) => {
      cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  },
});
var upload = multer({storage: storage});

/* GET users listing. */
router.post('/storeUser',upload.single('foto'), userController.storeUser);

router.get('/register', userController.register);
router.get('/profile/:id', userController.profile);
router.get('/login', userController.login);
router.get('/profileEdit/:id', userController.profileEdit);

router.post('/profileEdit/:id', userController.edit);
router.post('/login', userController.sesion);
router.post('/logout', userController.logout);
module.exports = router;
