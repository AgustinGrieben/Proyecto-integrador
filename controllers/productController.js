let product = require("../db/products")

let controlador = {
    detail: (req,res)=>{
        res.render("product", { producto: product[0]})
    },
    
}
module.exports = controlador