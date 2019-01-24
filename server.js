const express = require("express");
var session = require("express-session");
var passport = require("./config/passport");
const path = require("path");
const PORT = process.env.PORT || 3001;
var db = require("./models");
const app = express();

// Serve up static assets (usually on heroku)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hoaHelper");
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
