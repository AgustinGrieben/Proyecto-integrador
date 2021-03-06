let db = require("../db/products");
let database = require('../database/models');
const op = database.Sequelize.Op; 

const products = database.Product //alias del modelo 
console.log (products) 
let indexController = {
    index: function (req, res) {
        products.findAll({
            include: [{
                all: true, 
                nested: true
             }],
            order: [["createdAt", "DESC"]]
        })
        .then(function (zapatillas){
            //return res.send(zapatillas)
              return res.render('index', {productos:zapatillas})  
        }).catch(error=>{
            console.log(error)
        })


        },
    resultados: function (req, res) {

        products.findAll({
            include:[{association: 'user'}, {association: 'comments'}],
            where: [{nombre: {[op.like]: '%' + req.query.search + '%'}}]
        })
        .then(function (zapatillas){
            //return res.send(zapatillas)
              return res.render('search-results', {productos:zapatillas})  
        }).catch(error=>{
            console.log(error)
        })

        },
}
module.exports = indexController 
