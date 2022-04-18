var express = require('express');
var router = express.Router();
let userController = require("../controllers/userController")

/* GET users listing. */

router.get('/register', userController.register);
router.get('/profile', userController.profile);
router.get('/login', userController.login);
router.get('/profileEdit', userController.profileEdit);
module.exports = router;
