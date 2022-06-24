let user = require("../db/user")
let products = require("../db/products")
let db = require("../database/models")
let users = db.User
let bcrypt = require("bcryptjs")
let controlador = {
  register: (req, res) => {
    res.render("register")
  },
  profile: (req, res) => {

    users.findByPk(req.params.id, {
      include: { all: true, nested: true }
    }).then(usuario => {
      req.session.user = usuario
      res.render("profile", { usuario })
    }).catch(error=>{
      console.log(error)
  })

  },
  login: (req, res) => {
    res.render("login")

  },
  profileEdit: (req, res) => {
    if (req.session.user && req.session.user.id == req.params.id) {
      users.findByPk(req.params.id).then(usuario => {
        res.render("profile-edit", { usuario })
      })
    } else {
      res.redirect("/")
    }
  },

  edit: (req, res) => {
    let usuario = {
      email: req.body.email,
      username: req.body.usuario,
      date: req.body.fecha,
      dni: req.body.dni,
    }
    if (req.body.foto) usuario.image = req.body.foto
    if (req.body.password) usuario.password = bcrypt.hashSync(req.body.password, 10)
    users.update(usuario, {
      where: {
        id: req.params.id
      }
    })
      .then(function () {
        return res.redirect("/users/profile/" + req.params.id)
      }).catch(error=>{
        console.log(error)
    })
  },

  storeUser: (req, res) => {
    console.log(req.body);
    let password = bcrypt.hashSync(req.body.password, 10)
    let usuario = {
      email: req.body.email,
      username: req.body.usuario,
      password: password,
      date: req.body.fecha,
      dni: req.body.dni,
      image: req.file.filename
    }

    users.create(usuario)
      .then(function (a) {
        return res.redirect("/")
      }).catch(error=>{
        console.log(error)
    })

  },

  sesion: (req, res) => {
    let errors = {}
    users.findOne({
      where: {
        email: req.body.email
      }
    }).then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          req.session.user = user
          if (req.body.remember) {
            res.cookie("userId", user.id, {
              maxAge: 1000 * 60 * 5
            })
          }
          res.redirect("/")
        } else {
          errors.message = "contraseña incorrecta"
          res.locals.errors = errors
          return res.render("login")
        }
      }
      else {
        errors.message = "email es incorrecto"
        res.locals.errors = errors
        return res.render("login")
      }
    }).catch(error=>{
      console.log(error)
  })
  },

  logout: (req, res) => {
    req.session.user = null
    res.clearCookie("userId")
    res.redirect("/")
  },
}
module.exports = controlador