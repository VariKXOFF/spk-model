const express = require("express")
const sass = require("node-sass-middleware")
const path = require('path');
const app = express()
const port = process.env.PORT || 5000

app.use(express.urlencoded(true))
app.use(express.json())
app.use("/", require("./server/routes"))
app.use("/api", require("./api/routes"));
app.use(
    sass({
        src: __dirname + "/public/stylesheet/scss",
        dest: path.join('/public/stylesheet/css'),
    })
)
app.use('/public', express.static(path.join(__dirname, 'public')));

app.set("view engine", "pug")
app.set("views", "./server/templates")


app.listen(port)