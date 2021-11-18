const db = require("../db")

const CourseSchema = new db.Schema({
    name: String,
    price: String,
    text: String
})

const Course = db.model("сourse", CourseSchema)

module.exports = Course