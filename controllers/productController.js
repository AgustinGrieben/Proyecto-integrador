let db = require ("../database/models")
let products = db.Product

let controlador = {
    agregar: (req,res)=>{
        res.render("product-add", {user:user.lista})
    },
    
    detail: (req,res)=>{
        products.findByPk(req.params.id)
        .then(product=>{
            console.log(product)
            res.render("product", {producto: product})
        })
    },
}
module.exports = controlador




