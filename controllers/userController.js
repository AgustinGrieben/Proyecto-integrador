let user = require("../db/user")
let products = require("../db/products")
let db = require ("../database/models")
let users = db.User
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
      let usuario = {
        email: req.body.email,
        username: req.body.usuario,
        password: req.body.contraseña,
        date: req.body.fecha,
        dni: req.body.dni,
        image: req.body.foto 
      }

      users.create(usuario)
      .then(function(){
        return res.redirect("/")
      })

    }
}
module.exports = controlador