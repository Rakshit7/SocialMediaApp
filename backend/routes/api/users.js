const express = require("express");
const User = require("../../model/users");

var router = express.Router();

router.route("/registeruser").post((req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "email already exists" });
    } else {
      const newUser = new User({
        fname: req.body.fname,
        mname: req.body.mname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
        handlename: req.body.handlename,
      });
      newUser
        .save()
        .then((user) => res.json(user))
        .catch((err) => console.log(err));
    }
  });
});

router.route("/login").post((req, res) => {
  const { username, password } = req.body;
  User.findOne({ email: username, password: password }).then((user) => {
    if (!user) {
      return res
        .status(400)
        .json({ email: "Email not found! Please register" });
    } else {
      return res.status(200).json({ email: "Login success" });
    }
  });
});

module.exports = router;
