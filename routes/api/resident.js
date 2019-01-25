var db = require("../../models");

module.exports = function(app) {
    app.post("/addRes", function(req, res) {
        console.log(req.body);
        db.Resident.create(req.body).then(function (newRes) {
            return db.User.findOneAndUpdate({_id: req.user.id}, { $push: {Resident: newRes._id } }, { new: true });
          }
        ).catch(function(err) {
          console.log(err);
          res.json(err);
        });
      });
}