let db = require("../db/products");

let indexController = {
    index: function (req, res) {
        return res.render('index', {productos:db})

        },
    resultados: function (req, res) {
        return res.render('search-results')

        },

}
module.exports = indexController