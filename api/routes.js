const router = require("express").Router();
const Course = require("./models/course")
const User = require("./models/user")
const parser = require("body-parser").json()

router.post("/addcourse", parser, async (req, res) => {
    await Course(req.body).save()
})
router.post("/registration", parser, async (req, res) => {
    await User(req.body).save()
})

router.post("/getuser", parser, async (req, res) => {
    let data = await User.find({"username": req.body.username});
    res.send(data);
})

router.post("/checkuser", parser, async (req, res) => {
    let data = await User.find({"username": req.body.username, "password": req.body.password});
    res.send(data);
})

router.get("/allcourse", async (req, res) => {
    let course = await Course.find({});
    res.json(course);
});

module.exports = router