var express = require('express'); //requiero metodo express
var router = express.Router();
const indexController = require('../controllers/indexController'); //Para implementarlo en app.js creamos una const y requereimos el modulo


/* GET home page. */

router.get('/', indexController.index); //objeto literal router le paso como parametro los metodos de indexControler.index
router.get('/Resultados', indexController.resultados);

module.exports = router; //exportamos el contenido de router para que sea visible





