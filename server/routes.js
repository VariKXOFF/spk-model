const {render} = require("pug");
const routes = require("express").Router()

routes.get("/", (req, res) => {
    res.render("index")
})
routes.get("/study", (req, res) => {
    res.render("study")
})
routes.get("/registration", (req, res) => {
    res.render("registration")
})
routes.get("/login", (req, res) => {
    res.render("login")
})
routes.get("/logout", (req, res) => {
    res.render("logout")
})


module.exports = routes