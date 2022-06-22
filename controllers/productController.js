let db = require ("../database/models")
let products = db.Product
let controlador = {
    agregar: (req,res)=>{
        res.render("product-add" )
    },
    
    detail: (req,res)=>{
        products.findByPk(req.params.id, {
            include: [{
               all: true, 
               nested: true
            }],
            order: [["comments", "createdAt", "DESC"]]
        })
        .then(product=>{
            console.log(product)
            //res.send(product)
            res.render("product", {producto: product})
       
        })
    },
    store: (req,res)=>{ 
       let product= {
         nombre: req.body.nombre,
         valor: req.body.valor,
         tipo: req.body.tipo,
         descripcion: req.body.descripcion,
         image: req.body.image,
         fkUserId: req.session.user.id
       } 
       products.create(product)
       .then(response=>{
           res.redirect("/")
       })
    },
    delete: (req,res)=>{
        products.destroy({
            where:{
                id: req.params.id
            }
        }).then( response=>{
            res.redirect("/")
        })
     },
     edit: (req,res)=>{

     },
     editForm: (req,res)=>{
         products.findByPk(req.params.id)
         .then(producto=>{
             res.render("product-edit", {producto})
         })
     }

    

}
module.exports = controlador




