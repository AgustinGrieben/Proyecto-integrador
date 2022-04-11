let db = require("../db/products");

let indexController = {
    index: function (req, res) {
        res.render('index', {productos:db})
}}
module.exports = indexController