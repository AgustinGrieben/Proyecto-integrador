let user = require("../db/user")
let products = require("../db/products")
let controlador = {
    register: (req,res)=>{
        res.render("register")
    },
    profile: (req,res)=>{
        res.render("profile" , {user: user,productos:products})
    },
    login: (req,res)=>{
        res.render("login")

    },
    profileEdit:  (req,res)=>{
        res.render("profile-edit",{user:user})
    },
}
module.exports = controlador