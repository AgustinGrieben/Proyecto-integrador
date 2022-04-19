let product = require("../db/products");
let comentarios = require("../db/comentarios");
let user = require("../db/user");   

let controlador = {
    agregar: (req,res)=>{
        res.render("product-add", {user:user.lista})
    },
    detail: (req,res)=>{
        res.render("product", {producto: product[0], comentarios:comentarios.lista})
    },
}
module.exports = controlador

