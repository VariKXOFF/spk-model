const db = require("mongoose")

const user = "VariKX"
const password = "qwerty123"
const uri = `mongodb+srv://${user}:${password}@cluster0.jlwsm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

db.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

module.exports = db