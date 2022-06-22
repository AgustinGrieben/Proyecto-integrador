var express = require('express');
var router = express.Router();
let userController = require("../controllers/userController")

/* GET users listing. */
router.post('/storeUser',userController.storeUser);
router.get('/register', userController.register);
router.get('/profile/:id', userController.profile);
router.get('/login', userController.login);
router.get('/profileEdit/:id', userController.profileEdit);

router.post('/profileEdit/:id', userController.edit);
router.post('/login', userController.sesion);
router.post('/logout', userController.logout);
module.exports = router;
