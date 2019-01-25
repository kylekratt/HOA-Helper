var db = require("../../models");
var passport = require("../../config/passport");
const router = require("express").Router();



router.route("/login").post(passport.authenticate("local"), function (req, res) {

  res.json("/members");
});

router.route("/signup").post(function (req, res) {
  console.log(req.body);
  db.User.create({
    email: req.body.email,
    password: req.body.password
  }).then(function () {
    res.redirect(307, "/login");
  }).catch(function (err) {
    console.log(err);
    res.json(err);
  });
});

router.route("/logout").get(function (req, res) {
  req.logout();
  res.redirect("/");
});

router.route("/user_data").get(function (req, res) {
  if (!req.user) {
    res.json({});
  }
  else {
    res.json({
      email: req.user.email,
      id: req.user._id
    });
  }
});


module.exports = router;