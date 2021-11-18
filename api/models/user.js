const db = require("../db")

const UserSchema = new db.Schema({
    username: {
        type: "String",
        unique: true
    },
    name: "String",
    email: "String",
    surname: "String",
    password: "String",
    status: {
        type: "String",
        default: "Ученик"
    }
})

const User = db.model("user", UserSchema)

module.exports = User