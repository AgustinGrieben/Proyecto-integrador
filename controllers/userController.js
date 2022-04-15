let user = require("../db/user")

let controlador = {
    register: (req,res)=>{
        res.render("register")
    },
    profile: (req,res)=>{
        res.render("profile" , {user: user})
    },
    login: (req,res)=>{
        res.render("login")
    }
}
module.exports = controlador