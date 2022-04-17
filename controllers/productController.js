let product = require("../db/products")

let controlador = {
    agregar: (req,res)=>{
        res.render("product-add")
    },
    detail: (req,res)=>{
        res.render("product", { producto: product[0]})
    },
}
module.exports = controlador