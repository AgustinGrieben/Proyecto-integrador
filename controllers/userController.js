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
        res.render("profile" , {user: user.lista, productos:products})
    },
    login: (req,res)=>{
        res.render("login")

    },
    profileEdit:  (req,res)=>{
        res.render("profile-edit",{user:user.lista})
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
}

}
module.exports = controlador