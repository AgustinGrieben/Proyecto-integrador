let product = require("../db/products")
let user = require("../db/user")
let controlador = {
    agregar: (req,res)=>{
        res.render("product-add", {user:user})
    },
    detail: (req,res)=>{
        res.render("product", { producto: product[0]})
    },
}
module.exports = controlador