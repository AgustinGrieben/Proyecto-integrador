let user = require("../db/user")
let products = require("../db/products")
let db = require ("../database/models")
let users = db.User
let bcrypt = require("bcryptjs")
let controlador = {
    register: (req,res)=>{
        res.render("register")
    },
    profile: (req,res)=>{

      users.findByPk(req.params.id, {
        include:{all: true, nested:true}
        }).then(usuario => {
          req.session.user=usuario
        res.render("profile" , {usuario})
      })
      
    },
    login: (req,res)=>{
        res.render("login")

    },
    profileEdit:  (req,res)=>{
      if(req.session.user && req.session.user.id == req.params.id) {
        users.findByPk(req.params.id).then(usuario => {
          res.render("profile-edit" , {usuario})
        })
      } else {
        res.redirect("/")
      }
    },

   edit:  (req,res)=>{
    let usuario = {
      email: req.body.email,
      username: req.body.usuario,
      date: req.body.fecha,
      dni: req.body.dni,
    }
    if(req.body.foto) usuario.image = req.body.foto
    if(req.body.password)usuario.password = bcrypt.hashSync(req.body.password,10)
    users.update(usuario,{
      where:{
        id:req.params.id
      }
    })
    .then(function(){
      return res.redirect("/users/profile/"+req.params.id)
    })
   },

    storeUser: (req,res) =>{
      let password = bcrypt.hashSync(req.body.password,10)
      let usuario = {
        email: req.body.email,
        username: req.body.usuario,
        password: password,
        date: req.body.fecha,
        dni: req.body.dni,
        image: req.body.foto 
      }

      users.create(usuario)
      .then(function(){
        return res.redirect("/")
      })

    },

sesion: (req,res)=>{
  users.findOne({
    where:{
      email: req.body.email
    }
  }) .then(user=>{
    if(user){
      if(bcrypt.compareSync(req.body.password, user.password)){
        req.session.user= user
        if(req.body.remember) {
          res.cookie("userId", user.id,{
            maxAge: 1000*60*5
          })
        }
        res.redirect("/")
      }
    }
  })
},

logout:(req,res)=>{
  req.session.user= null
  res.clearCookie("userId")
  res.redirect("/")
},
}
module.exports = controlador