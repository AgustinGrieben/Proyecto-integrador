let db = require("../db/products");
let database = require('../database/models');

const products = database.Product //alias del modelo 
console.log (products) 
let indexController = {
    index: function (req, res) {
        products.findAll()
        .then(function (zapatillas){
            //return res.send(zapatillas)
              return res.render('index', {productos:zapatillas})  
        })





        },
    resultados: function (req, res) {
        return res.render('search-results')

        },
}
module.exports = indexController 
