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
       
        }).catch(error=>{
            console.log(error)
        })
    },
    store: (req,res)=>{ 
       let product= {
         nombre: req.body.nombre,
         valor: req.body.valor,
         tipo: req.body.tipo,
         descripcion: req.body.descripcion,
         image: req.file.filename,
         fkUserId: req.session.user.id
       } 
       products.create(product)
       .then(response=>{
           res.redirect("/")
       }).catch(error=>{
        console.log(error)
    })
    },
    comment: (req,res)=>{ 
       let comentario= {
        
         fkUserId: req.body.fkUserId,
         fkProductId: req.body.fkProductId,
         texto:req.body.texto,
         createdAt:Date.now()
       } 
       db.Comment.create(comentario)
       .then(response=>{
           res.redirect("/")
       }).catch(error=>{
        console.log(error)
    })
    },
    delete: (req,res)=>{
        products.destroy({
            where:{
                id: req.params.id
            }
        }).then( response=>{
            res.redirect("/")
        }).catch(error=>{
            console.log(error)
        })
     },
     edit: (req,res)=>{

     },
     editForm: (req,res)=>{
         products.findByPk(req.params.id)
         .then(producto=>{
             res.render("product-edit", {producto})
         }).catch(error=>{
            console.log(error)
        })
     }

    

}
module.exports = controlador




